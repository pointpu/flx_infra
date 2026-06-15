<template>
  <section id="pricing" class="section pricing-section">
    <div class="section-heading">
      <p class="eyebrow">Стоимость</p>
      <h2>Стоимость определяется до оплаты</h2>
      <p>
        Сервис оказывает информационно-технологические услуги. Итоговая сумма
        согласуется заранее и указывается в счёте ЮKassa до совершения платежа.
      </p>
    </div>

    <div class="price-table" aria-label="Услуги и стоимость">
      <article
        v-for="item in prices"
        :key="item.title"
        class="price-row"
      >
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
        <strong>{{ item.price }}</strong>
      </article>
    </div>

    <p class="pricing-note">
      Конкретная стоимость услуги определяется индивидуально до оплаты и указывается
      в счёте ЮKassa. Пользователь оплачивает только согласованную сумму после
      ознакомления с условиями заявки и документами сервиса.
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  prices: {
    title: string
    description: string
    price: string
  }[]
}>()
</script>
