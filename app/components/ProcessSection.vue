<script setup lang="ts">
defineProps<{
  steps: string[];
}>();
</script>

<template>
  <section id="process" class="section split-section">
    <div class="section-heading">
      <p class="eyebrow">Как работает</p>
      <h2>От требований до стабильной эксплуатации</h2>
      <p>
        Каждый этап фиксируется в рабочей документации, чтобы у команды, банка и платёжных
        систем была понятная картина процессов.
      </p>
    </div>

    <div class="steps">
      <article v-for="(step, index) in steps" :key="step" class="step">
        <span>{{ index + 1 }}</span>
        <p>{{ step }}</p>
      </article>
    </div>
  </section>
</template>