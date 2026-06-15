<template>
  <header class="topbar topbar-premium">
    <div class="topbar-main">
      <NuxtLink to="/" class="brand" aria-label="Главная">
        <span class="brand-mark">F</span>
        <span>{{ company.brand }}</span>
      </NuxtLink>

      <nav class="nav" aria-label="Разделы сайта">
        <a href="/#services">Услуги</a>
        <a href="/#pricing">Стоимость</a>
        <a href="/#payment">Запросить счёт</a>
        <a href="/#documents-section">Документы</a>
        <a href="/#contacts">Контакты</a>
      </nav>
    </div>

    <div class="status-line" aria-label="Статус сервиса">
      <span>Официальный ИП</span>
      <span>Документы опубликованы</span>
      <span>Счёт ЮKassa до оплаты</span>
      <span>AML/KYC-процедуры</span>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  company: {
    brand: string
  }
}>()
</script>
