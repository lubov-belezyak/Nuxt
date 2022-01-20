<template>
  <div class="py-8 bg-back-card shadow-lg rounded-lg my-8 bg-back-card">
    <div class="px-16">
      <h2 class="text-white text-2xl font-semibold">{{ title }}</h2>
      <p class="mt-2 text-zinc-500">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card4.vue",
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>