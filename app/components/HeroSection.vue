<template>
  <section id="top" class="hero hero-premium" aria-labelledby="hero-title">
    <div class="hero-content">
      <p class="eyebrow">Информационно-технологический сервис</p>

      <h1 id="hero-title">
        Платформа для обработки заявок, данных и интеграций
      </h1>

      <p class="hero-text">
        Обработка пользовательских заявок, техническое сопровождение, AML/KYC-процедуры,
        документы до оплаты и формирование согласованных счетов ЮKassa.
      </p>

      <div class="hero-actions">
        <a class="primary-button" href="#payment">Оставить заявку</a>
        <a class="secondary-button" href="/documents">Документы</a>
      </div>
    </div>

    <aside class="hero-dashboard" aria-label="Демонстрационная панель процесса">
      <div class="dashboard-top">
        <div>
          <span class="dashboard-label">Панель обработки заявки</span>
          <strong>Демо-панель заявки</strong>
        </div>
        <span class="dashboard-status">согласовано</span>
      </div>

      <div class="dashboard-flow">
        <div class="dashboard-row">
          <span>Обработка данных</span>
          <strong>выполнено</strong>
        </div>
        <div class="dashboard-row">
          <span>AML/KYC-проверка</span>
          <strong>предусмотрена</strong>
        </div>
        <div class="dashboard-row">
          <span>Документы</span>
          <strong>до оплаты</strong>
        </div>
        <div class="dashboard-row">
          <span>Счёт ЮKassa</span>
          <strong>после согласования</strong>
        </div>
      </div>

      <div class="dashboard-summary">
        <span>Итоговая стоимость</span>
        <p>указывается в счёте до оплаты</p>
      </div>
    </aside>
  </section>
</template>
