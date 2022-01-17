<template>
  <div>
    <div class='text-gray-800 max-w-xs my-auto mx-auto p-4 py-5 px-5 rounded-xl'>
      <div class="flex justify-between items-center">
        <div>
          <h2> {{ type }} Счет #567624170124 </h2>
        </div>
        <div class="flex items-center ml-4">
          <img :src="src" alt="">
        </div>
      </div>
      <div class="flex items-center">
        <p class='text-2xl font-bold'> {{value}} </p>
      </div>
      <div class='flex justify-between items-center mb-4' :class="visible">
        {{usd}}
      </div>
      <div class='flex justify-between'>
        <div>
          <button
              class="flex items-center justify-end border border-transparent rounded-md text-white bg-back-card px-1 py-1"
              type="button" data-modal-toggle="default-modal">
            <img src="/ico/wallet.svg" class="pr-2" alt=""> {{ buttonText }}
          </button>
        </div>
        <div>
          <button v-if="button"
              class="flex items-center justify-end border border-transparent rounded-md text-gray-800 px-1 py-1" :class="btClass"
              type="button" data-modal-toggle="default-modal">
            <img src="/ico/swap.svg" class="pr-2" alt=""> {{button}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPersonal.vue",
  props: {
    type: {
      type: String
    },
    src: {
      type: String
    },
    value: {
      type: String
    },
    usd: {
      type: String
    },
    buttonText: {
      type: String
    },
    button: {
      type: String
    },
    btClass: {
      type: String
    },
    visible: {
      type: String
    }
  }
}
</script>