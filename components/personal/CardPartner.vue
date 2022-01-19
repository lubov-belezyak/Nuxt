<template>
  <div>
    <div class="bg-card-dark bg-cover bg-center bg-no-repeat rounded-xl text-white">
      <div class="flex justify-between border-b border-gray-600 mx-4 pt-4">
        <div class="w-full">
          <h3 class="leading-tight text-xl text-white">{{title}}</h3>
          <div class="grid grid-cols-2 py-4">
            <div>
              <div class="flex items-center bg-clip-text text-transparent bg-gradient-to-l from-green-1 to-green-2">
                <img src="/ico/partners.svg" alt="" class="inline-block"> <span class="text-2xl font-bold">{{referal}}</span>
              </div>
              <p class="bg-clip-text text-transparent bg-gradient-to-l from-green-1 to-green-2 font-medium">Всего рефералов</p>
            </div>
            <div>
              <div class="flex items-center">
                <img src="/ico/moneys.svg" alt="" class="inline-block"> <span class="text-2xl font-bold">134 00</span>
              </div>
              <p class="font-light">Всего заработано</p>
            </div>
          </div>
        </div>
        <div class="inline-block">
          <span class="text-orange-300 inline-block">{{percent}}</span>
        </div>
      </div>
      <div class="flex justify-between mx-4 py-4">
        <div>
          <p class="inline-block text-gray-300">История</p>
        </div>
        <div class="inline-block">
          <svg class="fill-current h-8 w-8 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "CardPartner.vue",
  props: {
    title: {
      type: String
    },
    referal: {
      type: String
    },
    percent: {
      type: String
    }
  }
}
</script>