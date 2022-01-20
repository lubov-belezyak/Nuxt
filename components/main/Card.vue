<template>
  <div class="bg-back-card rounded-xl">
    <div class="flex">
      <img :src="src" class="rounded-lg">
      <div class="my-auto">
        <p class="text-xl overflow-hidden text-white">{{ title }}</p>
      </div>
    </div>
    <p class="-mt-4 font-light text-zinc-400 px-4 pt-4 pb-8 ml-4">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Card.vue",
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