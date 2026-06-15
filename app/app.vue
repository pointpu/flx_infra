<script setup lang="ts">
import "~/assets/css/main.css";

const siteUrl = "https://flyuxora.ru";

const title = "Flyuxora — обработка заявок, данных и интеграций";
const description =
  "Flyuxora — информационно-технологический сервис для обработки пользовательских заявок, данных, интеграций, документов, AML/KYC-процедур и согласования счетов ЮKassa.";

const schemaOrg = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Flyuxora",
    url: siteUrl,
    logo: `${siteUrl}/flyuxora-logo-mark.webp`,
    email: "tolkoplus@gmail.com",
    legalName: "Индивидуальный предприниматель Путилин Лев Леонидович",
    taxID: "482414631253",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Flyuxora",
    url: siteUrl,
    inLanguage: "ru-RU",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Информационно-технологические услуги Flyuxora",
    serviceType: "Обработка заявок, данных, интеграций и техническое сопровождение",
    provider: {
      "@type": "Organization",
      name: "Flyuxora",
      url: siteUrl,
    },
    areaServed: "RU",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: siteUrl,
      availableLanguage: "ru-RU",
    },
  },
];

useHead({
  htmlAttrs: {
    lang: "ru",
  },
  meta: [
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "Flyuxora",
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:url",
      content: siteUrl,
    },
    {
      property: "og:image",
      content: `${siteUrl}/fluxora-it-hero.webp`,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: `${siteUrl}/fluxora-it-hero.webp`,
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico?v=3",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: "/favicon.ico?v=3",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png?v=3",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png?v=3",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(schemaOrg),
    },
  ],
});
</script>

<template>
  <YandexMetrika />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
