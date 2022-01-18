<template>
  <div>
    <div class="text-white ml-8">
      <h3 class="leading-tight text-3xl text-white my-4">Ставка</h3>
      <p class="text-white text-xl font-light text-gray-500">Система ставок</p>
    </div>

    <div class="ml-8 bg-back-card mt-16 rounded-xl text-white pr-56 pl-4 py-4">
      <h3 class="leading-tight text-xl text-white">Информация</h3>
      <div class="py-4">
        <p class="inline-block text-gray-300 mr-16">EMG Награда:1% / День</p>
        <p class="inline-block text-gray-300">Всего получено: 0 EMG+</p>
      </div>
      <p class="text-gray-300">
        Исходя из вашего баланса EMG, вам насчитывается ежедневная ставка в размере 1%, 30% в месяц и 365% в год.
        Обновление и выплаты по стейкингу происходят в 00:00 по МСК на ваш Бонусный счет EMG+.
        Все расчеты по Staking отображаются у вас в разделе кошелёк – транзакции
      </p>
    </div>

    <div class="ml-8 bg-back-card mt-16 rounded-xl text-white">
      <div class="flex items-center justify-between flex-wrap px-6 py-4">
        <h3 class="leading-tight text-xl text-white">Последние EMG+ награды</h3>
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
                <path d="M7 0.999999L1.07071 6.92929C1.03166 6.96834 1.03166 7.03166 1.07071 7.07071L7 13"
                      stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <button class="mx-4">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1" stroke="white"
                      stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <table class="w-full items-center text-gray-300">
        <thead>
        <tr class="border-b border-gray-400 text-left">
          <th></th>
          <th class="font-light">Тип</th>
          <th class="font-light">Действие</th>
          <th class="font-light">Дата</th>
          <th class="font-light">Баланс</th>
          <th class="font-light">Сумма по операции</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in table" class="border-b border-gray-400">
          <td class="flex justify-center py-4 mr-2"><img class="w-6 h-6" :src="row.img"></td>
          <td>{{ row.type }}
            <div class="inline-block items-center ml-3 w-2 h-2 rounded-full" :class="row.class"></div>
          </td>
          <td>{{ row.action }}</td>
          <td>{{ row.date }}</td>
          <td>{{ row.balance }}</td>
          <td>{{ row.sum }} USD</td>
        </tr>
        </tbody>
      </table>

      <div class="flex items-center justify-between px-6 pb-4 mt-4 flex-wrap">
        <p class="leading-tight text-gray-300">1-8 из 1240</p>
        <div class="inline-block">
          <div class="inline-block">
            Страница
            <div class="group inline-block relative">
              <button class="py-2 px-4 rounded inline-flex items-center">
                <span class="mr-1">8</span>
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </button>
              <ul class="absolute hidden pt-1 group-hover:block bg-back-gray">
                <li class="">
                  <a class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">9</a>
                </li>
                <li class="">
                  <a class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">10</a>
                </li>
                <li class="">
                  <a class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">11</a>
                </li>
                <li class="">
                  <a class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">12</a>
                </li>
              </ul>
            </div>
          </div>
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
                <path d="M7 0.999999L1.07071 6.92929C1.03166 6.96834 1.03166 7.03166 1.07071 7.07071L7 13"
                      stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <button class="mx-4">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1" stroke="white"
                      stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bid.vue",
  data: () => ({
    table: [
      {
        img: '/ico/logo-light.svg',
        class: 'bg-green-400',
        type: 'Пополнение',
        action: 'Купить',
        date: '21:00 20.01.21',
        balance: '3 000',
        sum: '20 000'
      },
      {
        img: '/ico/logo-light.svg',
        class: 'bg-green-400',
        type: 'Пополнение',
        action: 'Перевод',
        date: '21:00 20.01.21',
        balance: '3 000',
        sum: '20 000'
      },
      {
        img: '/ico/logo-light.svg',
        class: 'bg-green-400',
        type: 'Пополнение',
        action: 'Купить',
        date: '21:00 20.01.21',
        balance: '3 000',
        sum: '20 000'
      },
      {
        img: '/ico/logo-light.svg',
        class: 'bg-green-400',
        type: 'Пополнение',
        action: 'Перевод',
        date: '21:00 20.01.21',
        balance: '3 000',
        sum: '20 000'
      },
      {
        img: '/ico/logo-light.svg',
        class: 'bg-green-400',
        type: 'Пополнение',
        action: 'Купить',
        date: '21:00 20.01.21',
        balance: '3 000',
        sum: '20 000'
      },
      {
        img: '/ico/logo-light.svg',
        class: 'bg-green-400',
        type: 'Пополнение',
        action: 'Купить',
        date: '21:00 20.01.21',
        balance: '3 000',
        sum: '20 000'
      }
    ]
  })
}
</script>