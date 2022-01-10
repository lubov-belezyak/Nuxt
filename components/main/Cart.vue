<template>
  <div>
    <div class="relative flex gap-3 ">
      <img :src="src" class="relative rounded-lg mb-4">
      <div class="flex flex-col w-fullh-screen ">
        <div class="flex flex-row justify-between m-auto">
          <p class="relative text-xl whitespace-nowrap truncate overflow-hidden text-white">{{ title }}</p>
        </div>
      </div>
    </div>
    <p class="-mt-4 text-gray-500">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Cart.vue",
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