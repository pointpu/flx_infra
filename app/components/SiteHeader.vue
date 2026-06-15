<template>
  <header class="topbar topbar-premium">
    <div class="topbar-main">
      <NuxtLink to="/" class="brand" aria-label="Главная">
        <span class="brand-mark">F</span>
        <span>{{ company.brand }}</span>
      </NuxtLink>

      <nav class="nav" aria-label="Разделы сайта">
        <NuxtLink to="/services">Услуги</NuxtLink>
        <NuxtLink to="/pricing">Стоимость</NuxtLink>
        <NuxtLink to="/workflow">Как работает</NuxtLink>
        <NuxtLink to="/documents">Документы</NuxtLink>
        <NuxtLink to="/about">Реквизиты</NuxtLink>
      </nav>
    </div>

    <NuxtLink to="/#payment" class="topbar-cta">Оставить заявку</NuxtLink>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  company: {
    brand: string
  }
}>()
</script>
