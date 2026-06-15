<template>
  <footer class="footer clean-footer">
    <div class="clean-footer__info">
      <strong>{{ company.fullLegalName }}</strong>
      <span>ИНН {{ company.inn }}</span>
      <span>ОГРНИП {{ company.ogrnip }}</span>
      <a :href="`mailto:${company.email}`">{{ company.email }}</a>
    </div>

    <nav aria-label="Документы и разделы сайта">
      <NuxtLink to="/documents">Все документы</NuxtLink>
      <NuxtLink to="/offer">Публичная оферта</NuxtLink>
      <NuxtLink to="/service-rules">Правила сервиса</NuxtLink>
      <NuxtLink to="/privacy">Политика конфиденциальности</NuxtLink>
      <NuxtLink to="/personal-data-consent">Согласие на обработку ПДн</NuxtLink>
      <NuxtLink to="/aml-kyc">AML/KYC</NuxtLink>
      <NuxtLink to="/risk-disclaimer">Уведомление о рисках</NuxtLink>
      <NuxtLink to="/refund-policy">Возвраты</NuxtLink>
      <NuxtLink to="/cookies">Cookies</NuxtLink>
    </nav>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  company: {
    fullLegalName: string
    inn: string
    ogrnip: string
    email: string
  }
}>()
</script>
