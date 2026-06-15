<script setup lang="ts">
defineProps<{
  advantages: string[];
}>();
</script>

<template>
  <section class="section">
    <div class="section-heading">
      <p class="eyebrow">Преимущества</p>
      <h2>Готовность к проверке банком и партнёрами</h2>
    </div>

    <div class="advantage-grid">
      <div v-for="advantage in advantages" :key="advantage" class="advantage">
        {{ advantage }}
      </div>
    </div>
  </section>
</template>