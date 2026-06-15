<script setup lang="ts">
defineProps<{
  company: {
    fullLegalName: string;
    inn: string;
    ogrnip: string;
    region: string;
    email: string;
    workTime: string;
  };
}>();
</script>

<template>
  <section id="contacts" class="contacts">
    <div>
      <p class="eyebrow">Контакты и реквизиты</p>
      <h2>Официальная информация</h2>
      <p>По вопросам заявок, документов, AML/KYC-проверки, возврата средств и обработки персональных данных пишите на электронную почту.</p>
    </div>

    <div class="contact-list">
      <div><span>Исполнитель</span><strong>{{ company.fullLegalName }}</strong></div>
      <div><span>ИНН</span><strong>{{ company.inn }}</strong></div>
      <div><span>ОГРНИП</span><strong>{{ company.ogrnip }}</strong></div>
      <div><span>Регион регистрации</span><strong>{{ company.region }}</strong></div>
      <div><span>Email</span><a :href="`mailto:${company.email}`">{{ company.email }}</a></div>
      <div><span>Режим работы</span><strong>{{ company.workTime }}</strong></div>
    </div>
  </section>
</template>
