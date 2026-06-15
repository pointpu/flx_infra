<template>
  <footer class="footer simple-footer">
    <div class="simple-footer__top">
      <div>
        <div class="simple-footer__brand">FLX</div>
        <p>
          Информационно-технологический сервис для обработки заявок, данных,
          документов и технического взаимодействия с партнёрами.
        </p>
      </div>

      <nav class="simple-footer__links" aria-label="Документы сервиса">
        <NuxtLink to="/documents">Все документы</NuxtLink>
        <NuxtLink to="/offer">Оферта</NuxtLink>
        <NuxtLink to="/aml-kyc">AML/KYC</NuxtLink>
        <NuxtLink to="/privacy">Политика ПДн</NuxtLink>
        <NuxtLink to="/personal-data-consent">Согласие на ПДн</NuxtLink>
        <NuxtLink to="/risk-disclaimer">Риски</NuxtLink>
        <NuxtLink to="/refund-policy">Возврат</NuxtLink>
        <NuxtLink to="/service-rules">Правила</NuxtLink>
        <NuxtLink to="/cookies">Cookies</NuxtLink>
      </nav>
    </div>

    <div class="simple-footer__bottom">
      <span>ИП Путилин Лев Леонидович</span>
      <span>ИНН 482414631253</span>
      <span>ОГРНИП 326480000028445</span>
      <a href="mailto:tolkoplus@gmail.com">tolkoplus@gmail.com</a>
      <span>© 2026</span>
    </div>
  </footer>
</template>
