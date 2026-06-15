import { mkdir, appendFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createError, getRequestHeader, readBody } from 'h3';

type Agreements = {
  offer?: boolean;
  amlKyc?: boolean;
  personalData?: boolean;
  riskDisclaimer?: boolean;
};

type AgreementText = {
  offer?: string;
  amlKyc?: string;
  personalData?: string;
  riskDisclaimer?: string;
};

type LeadPayload = {
  paymentId?: string;
  lastName?: string;
  name?: string;
  patronymic?: string;
  contact?: string;
  amount?: string;
  comment?: string;
  agreements?: Agreements;
  agreementText?: AgreementText;
  documentsVersion?: string;
};

const clean = (value: unknown) => String(value ?? '').trim();

const defaultAgreementText: Required<AgreementText> = {
  offer: 'Я принимаю условия Публичной оферты',
  amlKyc: 'Я ознакомлен с AML/KYC Policy',
  personalData: 'Я согласен на обработку персональных данных',
  riskDisclaimer: 'Я ознакомлен с уведомлением о рисках',
};

export default defineEventHandler(async (event) => {
  const body = await readBody<LeadPayload>(event);

  const agreements = {
    offer: body.agreements?.offer === true,
    amlKyc: body.agreements?.amlKyc === true,
    personalData: body.agreements?.personalData === true,
    riskDisclaimer: body.agreements?.riskDisclaimer === true,
  };

  const agreementText = {
    offer: clean(body.agreementText?.offer) || defaultAgreementText.offer,
    amlKyc: clean(body.agreementText?.amlKyc) || defaultAgreementText.amlKyc,
    personalData: clean(body.agreementText?.personalData) || defaultAgreementText.personalData,
    riskDisclaimer: clean(body.agreementText?.riskDisclaimer) || defaultAgreementText.riskDisclaimer,
  };

  const ip = clean(getRequestHeader(event, 'x-forwarded-for')).split(',')[0]
    || clean(getRequestHeader(event, 'x-real-ip'))
    || clean(event.node.req.socket.remoteAddress);

  const lead = {
    createdAt: new Date().toISOString(),
    paymentId: clean(body.paymentId),
    lastName: clean(body.lastName),
    name: clean(body.name),
    patronymic: clean(body.patronymic),
    contact: clean(body.contact),
    amount: clean(body.amount),
    comment: clean(body.comment),
    agreements,
    agreementText,
    documentsVersion: clean(body.documentsVersion) || '2026-06-09',
    ip,
    userAgent: clean(getRequestHeader(event, 'user-agent')),
  };

  if (!lead.paymentId || !lead.lastName || !lead.name || !lead.patronymic || !lead.contact || !lead.amount) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Заполните фамилию, имя, отчество, контакт и сумму',
    });
  }

  if (!agreements.offer || !agreements.amlKyc || !agreements.personalData || !agreements.riskDisclaimer) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Необходимо принять оферту, AML/KYC Policy, согласие на обработку персональных данных и уведомление о рисках',
    });
  }

  const storageDir = join(process.cwd(), 'storage');
  const filePath = join(storageDir, 'clients.jsonl');

  await mkdir(storageDir, { recursive: true });
  await appendFile(filePath, JSON.stringify(lead, null, 0) + '\n', 'utf8');

  return {
    ok: true,
    paymentId: lead.paymentId,
  };
});
