<script setup lang="ts">
defineProps<{
  services: Array<{
    title: string;
    text: string;
  }>;
}>();
</script>

<template>
  <section id="services" class="section">
    <div class="section-heading">
      <p class="eyebrow">Услуги</p>
      <h2>Технологический контур под ключ</h2>
    </div>

    <div class="service-grid">
      <article v-for="(service, index) in services" :key="service.title" class="info-card">
        <div class="card-index">0{{ index + 1 }}</div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.text }}</p>
      </article>
    </div>
  </section>
</template>