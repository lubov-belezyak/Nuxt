<template>
  <div>
    <div class="text-white ml-8">
      <h3 class="leading-tight text-3xl text-white my-4">Кошелек</h3>
      <p class="text-white text-xl font-light text-gray-500">Здесь представлены ваши счета и истории транзакций</p>
    </div>

    <div class="grid grid-cols-3 mt-4">
      <CardPersonal
          class="bg-card-gold bg-auto bg-center bg-no-repeat"
          type="EMG "
          src="/ico/logo.png"
          value="20 EMG"
          usd="0,0 USD"
          buttonText="Купить"
          button="Перевести"
          btClass="border border-gray-800"
      />
      <CardPersonal
          class="bg-card-gray bg-auto bg-center bg-no-repeat"
          type="EMG + "
          src="/ico/logo.png"
          value="20 EMG +"
          usd="0,0 USD"
          buttonText="Вывести"
          button="Как получить"
          btClass=""
      />
      <CardPersonal
          class="bg-card-green bg-auto bg-center bg-no-repeat"
          type="USD "
          src="/ico/usd.png"
          value="20 USD"
          usd="0"
          visible="invisible"
          buttonText="Пополнить"
      />
    </div>

    <div class="ml-8 bg-back-card mt-16 rounded-xl text-white">
      <div class="flex items-center justify-between flex-wrap px-4 py-4">
        <h3 class="leading-tight text-xl text-white">История транзакций</h3>
        <div class="inline-block">
          <div class="inline-block">
            Кол-во на стр
            <div class="group inline-block relative">
              <button class="py-2 px-4 rounded inline-flex items-center">
                <span class="mr-1">10</span>
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </button>
              <ul class="absolute hidden pt-1 group-hover:block bg-back-gray">
                <li class="">
                  <a class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">10</a>
                </li>
                <li class="">
                  <a class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">20</a>
                </li>
                <li class="">
                  <a class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">30</a>
                </li>
                <li class="">
                  <a class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">40</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="inline-block items-center">
            <button class="mx-4">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0.999999L1.07071 6.92929C1.03166 6.96834 1.03166 7.03166 1.07071 7.07071L7 13" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <button class="mx-4">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <table class="min-w-full">
        <thead class="">
        </thead>
      </table>
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