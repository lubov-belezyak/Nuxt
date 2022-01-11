<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-7 items-center">
        <div>
          <nuxt-link to="/" class="flex">
            <img src="/ico/logo-gold.svg" class="h-12">
            <img src="/ico/energy-gold.svg" class="ml-5">
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/white-paper"
                     class="block mx-16 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white font-medium"
                     aria-current="page">White Paper
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to=""
                     class="block text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white font-medium"
                     aria-current="page">О нас
          </nuxt-link>
        </div>
        <div class="col-start-7 col-span-1">
          <div class="w-auto ml-auto mr-0 float-right">
            <a href="#"
               class="flex justify-end border border-transparent text-base font-medium rounded-md text-white bg-back-card px-5 py-2">
              <img src="/ico/entrance.svg" class="pt-2-2"> Войти
            </a>
          </div>
        </div>
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