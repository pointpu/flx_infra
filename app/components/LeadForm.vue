<script setup lang="ts">
const isOpen = ref(false)
const loading = ref(false)
const errorMessage = ref('')

const form = reactive({
  lastName: '',
  firstName: '',
  middleName: '',
  contact: '',
  amount: '',
  comment: '',
  offerAccepted: false,
})

const submit = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    if (!form.offerAccepted) {
      errorMessage.value = 'Необходимо согласиться с условиями сервиса.'
      return
    }

    const result = await $fetch<{
      ok: boolean
      requestId: string
      invoiceId: string
      invoiceUrl: string
    }>('/api/payment-request', {
      method: 'POST',
      body: {
        lastName: form.lastName,
        firstName: form.firstName,
        middleName: form.middleName,
        contact: form.contact,
        amount: Number(form.amount),
        comment: form.comment,

        offerAccepted: form.offerAccepted,
        offerVersion: '2026-06-12',

        browserLanguage: navigator.language,
        platform: navigator.platform,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        hardwareConcurrency: navigator.hardwareConcurrency || null,
        deviceMemory: (navigator as any).deviceMemory || null,
      },
    })

    if (!result.invoiceUrl) {
      errorMessage.value = 'Ссылка на счёт не получена.'
      return
    }

    reachPaymentRequestCreatedGoal(result.invoiceUrl)
  } catch (e) {
    errorMessage.value = 'Не удалось создать счёт. Попробуйте ещё раз.'
  } finally {
    loading.value = false
  }
}

const closeModal = () => {
  isOpen.value = false
  errorMessage.value = ''
}

const reachPaymentRequestCreatedGoal = (redirectUrl: string) => {
  const go = () => {
    window.location.href = redirectUrl
  }

  if (
    process.client &&
    typeof window !== "undefined" &&
    typeof (window as any).ym === "function"
  ) {
    let redirected = false

    const safeGo = () => {
      if (redirected) return
      redirected = true
      go()
    }

    ;(window as any).ym(
      109835938,
      "reachGoal",
      "payment_request_created",
      {},
      safeGo
    )

    setTimeout(safeGo, 700)
    return
  }

  go()
}

</script>

<template>
  <section id="payment" class="py-20 border-t border-slate-800">
    <div class="mx-auto max-w-4xl px-4 text-center">
      <h2 class="text-4xl font-bold mb-4">
        Заявка и счёт на оплату
      </h2>

      <p class="text-slate-300 mb-10">
        Оставьте заявку — после согласования будет сформирован счёт ЮKassa для оплаты.
      </p>

      <button
        type="button"
        class="rounded-2xl bg-white text-black font-bold px-10 py-4 hover:opacity-90 transition"
        @click="isOpen = true"
      >
        Запросить счёт
      </button>
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
    >
      <div class="w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 p-6 relative">
        <button
          type="button"
          class="absolute right-5 top-5 text-slate-400 hover:text-white"
          @click="closeModal"
        >
          ✕
        </button>

        <h3 class="text-2xl font-bold mb-3">
          Данные для оформления счёта
        </h3>

        <p class="text-slate-400 mb-6">
          После нажатия кнопки будет создан счёт ЮKassa, а данные заявки и email для чека будут сохранены.
        </p>

        <form class="grid gap-4" @submit.prevent="submit">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              v-model="form.lastName"
              required
              type="text"
              placeholder="Фамилия"
              class="rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4"
            >

            <input
              v-model="form.firstName"
              required
              type="text"
              placeholder="Имя"
              class="rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4"
            >

            <input
              v-model="form.middleName"
              type="text"
              placeholder="Отчество"
              class="rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4"
            >
          </div>

          <input
            v-model="form.contact"
            required
            type="email" autocomplete="email"
            placeholder="Email для чека"
            class="rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4"
          >
            <p class="text-xs text-slate-400">
              Чек будет направлен на указанный email. Проверьте правильность адреса перед оплатой.
            </p>


          <input
            v-model="form.amount"
            required
            type="number"
            min="1"
            step="0.01"
            placeholder="Сумма, ₽"
            class="rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4"
          >

          <textarea
            v-model="form.comment"
            placeholder="Комментарий"
            class="rounded-2xl bg-slate-950 border border-slate-700 px-5 py-4 min-h-28"
          ></textarea>

          <label class="flex gap-3 text-left text-sm text-slate-300">
            <input
              v-model="form.offerAccepted"
              required
              type="checkbox"
              class="mt-1"
            >
            <span>
              Нажимая «Запросить счёт», я подтверждаю, что ознакомлен и согласен с
              <a href="/offer" target="_blank" class="underline">публичной офертой</a>,
              <a href="/service-rules" target="_blank" class="underline">правилами сервиса</a>,
              <a href="/privacy" target="_blank" class="underline">политикой обработки персональных данных</a>,
              <a href="/personal-data-consent" target="_blank" class="underline">согласием на обработку персональных данных</a>,
              <a href="/aml-kyc" target="_blank" class="underline">AML/KYC-политикой</a>,
              <a href="/risk-disclaimer" target="_blank" class="underline">уведомлением о рисках</a>,
              <a href="/refund-policy" target="_blank" class="underline">политикой возвратов</a>
              и <a href="/cookies" target="_blank" class="underline">политикой cookies</a>.
            </span>
          </label>

          <p v-if="errorMessage" class="text-red-400 text-sm">
            {{ errorMessage }}
          </p>

          <button
            type="submit"
            :disabled="loading"
            class="rounded-2xl bg-white text-black font-bold py-4 hover:opacity-90 transition disabled:opacity-50"
          >
            {{ loading ? 'Создаём счёт...' : 'Запросить счёт' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
