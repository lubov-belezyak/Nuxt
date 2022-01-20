<template>
  <div class="py-8 bg-back-card shadow-lg rounded-lg my-20 bg-back-card">
    <div class="flex object-contain justify-start -mt-16 -ml-8">
      <div class="rounded-full bg-gradient-gold p-4 shadow-lg shadow-gold-2/50">
      <img :src="src" alt="">
      </div>
    </div>
    <div class="px-16">
      <h2 class="text-white text-xl font-semibold">{{ title }}</h2>
      <p class="mt-2 text-zinc-500">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card2.vue",
  props: {
    src: {
      type: String
    },
    title: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>