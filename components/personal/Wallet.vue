<template>
  <div>
  <div class="text-white ml-8">
    <h3 class="leading-tight text-3xl text-white my-4">Кошелек</h3>
    <p class="text-white text-xl font-light text-gray-500">Здесь представлены ваши счета и истории транзакций</p>
  </div>

    <div class="grid grid-cols-3 mt-4">
      <CardPersonal
      class= "bg-card-gold bg-auto bg-center bg-no-repeat"
      type="EMG "
      src="/ico/logo.png"
      value="20 EMG"
      usd = "0,0 USD"
      buttonText = "Купить"
      button = "Перевести"
      btClass = "border border-gray-800"
      />
      <CardPersonal
          class= "bg-card-gray bg-auto bg-center bg-no-repeat"
          type="EMG + "
          src="/ico/logo.png"
          value="20 EMG +"
          usd = "0,0 USD"
          buttonText = "Вывести"
          button = "Как получить"
          btClass = ""
      />
      <CardPersonal
          class= "bg-card-green bg-auto bg-center bg-no-repeat"
          type="USD "
          src="/ico/usd.png"
          value="20 USD"
          buttonText = "Пополнить"
      />
    </div>
  </div>
</template>

<script>
import CardPersonal from "./CardPersonal";
export default {
  name: "Wallet.vue",

  components: {CardPersonal},
  dirs: [
    '~/components',
    '~/components/personal'
  ]
}


</script>