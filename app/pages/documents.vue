<script setup lang="ts">
useHead({ title: "Документы" });

const docs = [
  { title: "AML/KYC Policy", to: "/aml-kyc" },
  { title: "Публичная оферта", to: "/offer" },
  { title: "Cookies Policy", to: "/cookies" },
  { title: "Risk Disclaimer", to: "/risk-disclaimer" },
  { title: "Политика возврата средств", to: "/refund-policy" },
  { title: "Правила оказания услуг", to: "/service-rules" },
  { title: "Политика обработки персональных данных", to: "/privacy" },
  { title: "Согласие на обработку персональных данных", to: "/personal-data-consent" },
];
</script>

<template>
  <main class="legal-page">
    <NuxtLink class="legal-back" to="/">← На главную</NuxtLink>

    <article class="legal-card">
      <p class="eyebrow">Юридический раздел</p>
      <h1>Документы</h1>
      <p>Основные документы сервиса, условия оказания услуг, обработки данных, AML/KYC-проверки и уведомления о рисках.</p>

      <div class="legal-links">
        <NuxtLink v-for="item in docs" :key="item.to" :to="item.to">
          {{ item.title }}
        </NuxtLink>
      </div>
    </article>
  </main>
</template>
