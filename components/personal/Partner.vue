<template>
  <div>
    <div class="text-white ml-8">
      <h3 class="leading-tight text-3xl text-white my-4">Партнеры</h3>
      <p class="text-white text-xl font-light text-gray-500">Здесь представлена статистика пореферальной системе</p>
    </div>

    <div class="ml-8 bg-back-card mt-16 rounded-xl text-white pl-4 py-4">
      <div class="flex justify-between">
        <div class="w-full">
          <h3 class="leading-tight text-xl text-white">Общая статистика</h3>
          <p class="py-4 inline-block text-gray-300 mr-16">Статистика по всем уровням</p>
          <div class="grid grid-cols-3 w-full">
            <div>
              <div class="flex items-center bg-clip-text text-transparent bg-gradient-to-l from-green-1 to-green-2">
              <img src="/ico/partners.svg" alt="" class="inline-block"> <span class="text-2xl font-bold">30</span>
              </div>
              <p class="bg-clip-text text-transparent bg-gradient-to-l from-green-1 to-green-2 font-medium">Всего рефералов</p>
            </div>
            <div>
              <div class="flex items-center">
                <img src="/ico/moneys.svg" alt="" class="inline-block"> <span class="text-2xl font-bold">134 00</span>
              </div>
              <p class="font-light">Всего заработано</p>
            </div>
            <div>
              <div class="flex items-center">
              <div class="flex-none bg-zinc-700 rounded-full">
                <svg class="fill-current text-white h-8 w-8 inline-block" viewBox="0 0 20 20">
                  <path d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825"></path>
                </svg> <span class="text-gray-300">https//energymg.money?ghgfgjkhgkj </span>
              </div>
              </div>
              <p class="font-medium">Ваша ссылка</p>
            </div>
          </div>
        </div>
        <div class="inline-block pr-8">
          <img src="/images/qr.png" alt="">
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 grid-rows-2 ml-8 mt-8 gap-4">
      <CardPartner
      title="1 Уровень"
      referal="10"
      percent="5%"
      />
      <CardPartner
      title="2 Уровень"
      referal="15"
      percent="3%"
      />
      <CardPartner
      title="3 Уровень"
      referal="12"
      percent="1,5%"
      />
    </div>
  </div>
</template>

<script>
import CardPartner from "./CardPartner";
export default {
  name: "Partner.vue",
  components: {CardPartner},
  dirs: [
    '~/components',
    '~/components/personal'
  ],
}
</script>