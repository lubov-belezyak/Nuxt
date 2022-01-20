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
                     class="block mx-16 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white font-medium hover:text-gold-2"
                     aria-current="page">White Paper
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to=""
                     class="block text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white font-medium hover:text-gold-2"
                     aria-current="page">О нас
          </nuxt-link>
        </div>
        <div class="col-start-7 col-span-1">
          <div class="w-auto ml-auto mr-0 float-right">
            <button
                class="flex justify-end border border-transparent text-base font-medium rounded-md text-white bg-back-card px-5 py-2 hover:bg-gold-2"
                type="button" data-modal-toggle="default-modal">
              <img src="/ico/entrance.svg" class="pr-2"> Войти
            </button>

            <!-- Main modal -->
            <div id="default-modal" aria-hidden="true"
                 class="hidden fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 justify-center items-center">
              <div class="relative w-full max-w-xl px-4 h-full md:h-auto">
                <!-- Modal content -->
                <div class="bg-back-gray rounded-lg shadow relative">
                  <!-- Modal header -->
                  <div class="flex items-start justify-between p-5">
                    <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="default-modal">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                      </svg>
                    </button>
                  </div>


                  <!-- Modal body -->
                  <div class="">
                    <h3 class="text-center leading-tight text-3xl text-white font-bold mb-4">Войти</h3>
                    <form class="shadow-md rounded pt-6 pb-8 mb-4 px-16">
                      <input
                          class="rounded border-0 w-full py-2 px-3 text-white bg-back-card my-4 focus:border focus:border-gold-1 focus:ring-gold-1"
                          type="email" placeholder="Email">
                      <input
                          class="rounded border-0 w-full py-2 px-3 text-white bg-back-card my-4 focus:border focus:border-gold-1 focus:ring-gold-1"
                          type="password" placeholder="Password">
                      <div class="my-4">
                        <label class="inline-flex items-center">
                          <input class="text-gold-1 w-6 h-6 mr-2 focus:ring-gold-1 border border-gray-300 rounded-full"
                                 type="checkbox"/>
                          <span class="text-white">Запомнить меня</span>
                        </label>
                      </div>

                      <a href="/personal"
                         class="inline-flex justify-center w-full hover:bg-gray-200 text-black text-center py-4 px-4 rounded bg-gold-1 text-white text-xl hover:bg-gold-2 my-2 shadow-gold-1">
                        Купить
                      </a>

                      <div class="text-center mt-8">
                        <a class="mt-8 text-white" href="#">Забыли пароль?</a>
                      </div>
                      <div class="text-center mt-4">
                        <a class="mt-8 text-white" href="#">Зарегистрироваться</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
  </div>
</template>

<script>
export default {
  name: "Navbar.vue"
}
</script>
<style>
</style>
