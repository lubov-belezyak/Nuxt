<template>
  <div>
    <div class="container flex flex-wrap items-center mx-auto">
      <a href="#" class="flex">
        <img src="/ico/logo-gold.svg" class="h-12">
        <img src="/ico/energy-gold.svg" class="ml-5">
      </a>
      <div class="hidden w-full md:block md:w-auto">
        <ul class="flex mt-4 flex-row space-x-8 mt-0  font-medium">
          <li class="ml-20">
            <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">White Paper</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">О нас</a>
          </li>
        </ul>
      </div>
      <div class="w-auto ml-auto mr-0 float-right">
        <a href="#" class="flex justify-end border border-transparent text-base font-medium rounded-md text-white bg-black px-5 py-2">
          <img src="/ico/entrance.svg" class="pt-2-2"> Войти
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar.vue"
}
</script>

<style scoped>

</style>