<template>
  <div class="bg-back-gray min-h-screen">
    <div class="grid grid-cols-12">
      <div class="col-span-2">
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 w-full">
          <div class="flex flex-col top-0 left-0 bg-back-card min-h-screen shadow-lg justify-center w-auto">
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
                  <button type="button" @click="component='Wallet'"
                          class="w-full relative flex flex-row items-center h-11 focus:outline-none hover:bg-back-block-3 hover:text-gold-1 border-l-4 border-transparent hover:border-gold-1 pr-6">
                    <img src="/ico/wallet.svg" alt="" class="ml-4">
                    <span class="ml-4 tracking-wide truncate">Кошелек</span>
                    <span class="px-1 py-1 ml-4 text-xs font-medium tracking-wide bg-gold-1 rounded-full"></span>
                  </button>
                </li>
                <li class="text-gray-400">
                  <button type="button" @click="component='Bid'"
                      class="w-full relative flex flex-row items-center h-11 focus:outline-none hover:bg-back-block-3 hover:text-gold-1 border-l-4 border-transparent hover:border-gold-1 pr-6">
                    <img src="/ico/procent.svg" alt="" class="ml-4">
                    <span class="ml-4 tracking-wide truncate">Ставка</span>
                    <span class="px-1 py-1 ml-4 text-xs font-medium tracking-wide bg-gold-1 rounded-full"></span>
                  </button>
                </li>
                <li class="text-gray-400">
                  <button type="button" @click="component='Partner'"
                     class="w-full relative flex flex-row items-center h-11 focus:outline-none hover:bg-back-block-3 hover:text-gold-1 border-l-4 border-transparent hover:border-gold-1 pr-6">
                    <img src="/ico/partner.svg" alt="" class="ml-4">
                    <span class="ml-4 tracking-wide truncate">Партнеры</span>
                  </button>
                </li>
                <li class="text-gray-400">
                  <button type="button" @click="component='Setting'"
                     class="w-full relative flex flex-row items-center h-11 focus:outline-none hover:bg-back-block-3 hover:text-gold-1 border-l-4 border-transparent hover:border-gold-1 pr-6">
                    <img src="/ico/settings.svg" alt="" class="ml-4">
                    <span class="ml-4 tracking-wide truncate">Настройки</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-8">
        <component :is="component"/>
      </div>

      <div class="col-span-2">

      </div>
    </div>
  </div>
</template>

<script>
import Wallet from "../components/personal/Wallet";
import Bid from "../components/personal/Bid";
import Partner from "../components/personal/Partner";
import Setting from "../components/personal/Setting";

export default {
  components: {Wallet, Bid, Partner, Setting},
  data() {
    return {
      component: 'Wallet'
    }
  },
  dirs: [
    '~/components',
    '~/components/personal'
  ]
}
</script>