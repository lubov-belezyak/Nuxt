<template>
<div>
  <!-- component -->
  <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
    <div class="fixed flex flex-col top-0 left-0 w-96 bg-back-card h-full shadow-lg justify-center">
      <div class="flex items-center pl-6 h-20 justify-center mt-4">
        <nuxt-link to="/" class="flex">
          <img src="/ico/logo-gold.svg" class="h-12" alt="">
          <img src="/ico/energy-gold.svg" class="ml-5" alt="">
        </nuxt-link>
      </div>
      <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <ul class="flex flex-col py-6 space-y-1">
          <li>
            <div class="grid grid-cols-2 grid-rows-3 items-center text-gray-200">
              <div class="relative flex flex-row h-11 items-center">
                <img class="inline-flex justify-center items-center ml-4" src="/ico/emg.svg" alt=""> 20 EMG
              </div>
              <div class="w-auto ml-4">
              <button
                  class="hover:text-gold-1 border hover:border-gold-1 rounded px-2">
                Купить
              </button>
              </div>

              <div class="relative flex flex-row h-11 items-center">
                <img class="inline-flex justify-center items-center ml-4" src="/ico/emg-plus.svg" alt=""> 30 EMG +
              </div>
              <div class="w-auto ml-4">
                <button
                    class="hover:text-gold-1 border border-gray-100 hover:border-gold-1 rounded px-2">
                  Вывести
                </button>
              </div>

              <div class="relative flex flex-row h-11 text-white items-center">
                <img class="inline-flex justify-center items-center ml-4" src="/ico/usd.svg" alt=""> 20 USD
              </div>
              <div class="w-auto ml-4">
                <button
                    class="hover:text-gold-1 border border-gray-100 hover:border-gold-1 rounded px-2">
                  Пополнить
                </button>
              </div>
            </div>
          </li>
          <li class="pt-8 text-gray-400">
            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-back-block-3 hover:text-gold-1 border-l-4 border-transparent hover:border-gold-1 pr-6">
                <img src="/ico/wallet.svg" alt="" class="ml-4">
              <span class="ml-4 tracking-wide truncate">Кошелек</span>
              <span class="px-1 py-1 ml-4 text-xs font-medium tracking-wide bg-gold-1 rounded-full"></span>
            </a>
          </li>
          <li class="text-gray-400">
            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-back-block-3 hover:text-gold-1 border-l-4 border-transparent hover:border-gold-1 pr-6">
              <img src="/ico/procent.svg" alt="" class="ml-4">
              <span class="ml-4 tracking-wide truncate">Ставка</span>
              <span class="px-1 py-1 ml-4 text-xs font-medium tracking-wide bg-gold-1 rounded-full"></span>
            </a>
          </li>
          <li class="text-gray-400">
            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-back-block-3 hover:text-gold-1 border-l-4 border-transparent hover:border-gold-1 pr-6">
              <img src="/ico/partner.svg" alt="" class="ml-4">
              <span class="ml-4 tracking-wide truncate">Партнеры</span>
            </a>
          </li>
          <li class="text-gray-400">
            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-back-block-3 hover:text-gold-1 border-l-4 border-transparent hover:border-gold-1 pr-6">
              <img src="/ico/settings.svg" alt="" class="ml-4">
              <span class="ml-4 tracking-wide truncate">Настройки</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "NavigationLK.vue"
}
</script>