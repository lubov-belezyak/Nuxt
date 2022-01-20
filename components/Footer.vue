<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-3 items-center">
        <div>
          <a href="#" class="flex">
            <img src="/ico/logo-gold.svg" class="h-12">
            <img src="/ico/energy-gold.svg" class="ml-5">
          </a>
        </div>
        <div>
          <ul class="flex flex-row space-x-8 mt-0  font-medium">
            <li class="ml-20">
              <a href="#"
                 class="block py-2 pr-4 pl-3 font-light text-white bg-zinc-300 hover:text-gold-1 rounded md:bg-transparent md:p-0 dark:text-white"
                 aria-current="page">White Paper</a>
            </li>
            <li>
              <a href="#"
                 class="block py-2 pr-4 pl-3 font-light text-white bg-zinc-300 hover:text-gold-1 rounded md:bg-transparent md:p-0 dark:text-white">О
                нас</a>
            </li>
          </ul>
        </div>
        <div class="grid grid-cols-5">
          <a href="#">
            <img src="/ico/facebook.svg">
          </a>
          <a href="#">
            <img src="/ico/youtube.svg" class="pt-2-2">
          </a>
          <a href="#">
            <img src="/ico/vk.svg" class="pt-2-2">
          </a>
          <a href="#">
            <img src="/ico/instagramm.svg" class="pt-2-2">
          </a>
          <a href="#">
            <img src="/ico/telegramm.svg" class="pt-2-2">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer.vue"
}
</script>

<style scoped>

</style>