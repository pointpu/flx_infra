<script setup lang="ts">
import { company } from "../data/company";
</script>

<template>
  <div class="site-shell">
    <SiteHeader :company="company" />
    <slot />
    <SiteFooter :company="company" />
  </div>
</template>
