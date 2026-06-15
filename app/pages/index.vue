<script setup lang="ts">
import { company } from "../data/company";
import { advantages, prices, services, steps } from "../data/landing";
</script>

<template>
  <div class="site-shell">
    <SiteHeader :company="company" />

    <main>
      <HeroSection />
      <ServicesSection :services="services" />
      <PricingSection :prices="prices" />
    <LeadForm />
    <TrustSection />
      <ProcessSection :steps="steps" />
      <AdvantagesSection :advantages="advantages" />
      <ContactsSection :company="company" />
      </main>

    <SiteFooter :company="company" />
  </div>
</template>
