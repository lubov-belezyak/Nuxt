<template>
  <div class="bg-back-card rounded-lg">
    <div class="flex">
      <img :src="src" class="rounded-lg">
      <div class="flex flex-col w-fullh-screen ">
        <div class="flex flex-row justify-between m-auto">
          <p class="-mt-4 text-zinc-500 pl-4 pr-4 text-xl">{{ text }}</p>
        </div>
      </div>
    </div>
    <p class="relative text-3xl whitespace-nowrap truncate overflow-hidden text-white font-normal pl-8 pr-4 -mt-4 mb-4">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "Card3.vue",
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