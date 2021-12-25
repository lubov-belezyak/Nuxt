<template>
  <div class="bg-main-image bg-cover bg-no-repeat bg-center">
    <div class="pt-5">
      <Navbar/>
    </div>

    <div class="container flex flex-wrap">
      <div class="flex-1">
        <h1 class="leading-tight text-5xl text-white font-bold mt-52">Приветствуем вас на платформе <br><span
            class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-gold-1 to-gold-2 font-bold">Energy Mining Gold</span>
        </h1>
        <p class="text-white mt-10 mb-10 text-2xl font-light">Realm of the galaxies across the centuries the carbon in
          our <br>apple pies vanquish the
          impossible another world venture.</p>
        <a href="#"
           class="border border-transparent text-center font-medium text-white bg-gradient-gold px-5 py-2">
          Открыть кошелёк
        </a>
      </div>
      <div class="flex-none mt-36">
        <a href="#" class="flex justify-end">
          <img src="/ico/facebook.svg" class="pt-2-2">
        </a>
        <a href="#" class="flex justify-end">
          <img src="/ico/youtube.svg" class="pt-2-2">
        </a>
        <a href="#" class="flex justify-end">
          <img src="/ico/vk.svg" class="pt-2-2">
        </a>
        <a href="#" class="flex justify-end">
          <img src="/ico/instagramm.svg" class="pt-2-2">
        </a>
        <a href="#" class="flex justify-end">
          <img src="/ico/telegramm.svg" class="pt-2-2">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar";

export default {
  name: "Block1",
  components: {Navbar},
  dirs: [
    '~/components'
  ]
}
</script>

<style>
</style>