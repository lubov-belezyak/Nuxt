<template xmlns="http://www.w3.org/1999/html">
  <div class="bg-back-gray">
    <div class="bg-main-image bg-cover bg-no-repeat bg-center">
      <div class="pt-5">
        <Navbar/>
      </div>

      <div class="container flex flex-wrap">
        <div class="flex-1">
          <h1 class="leading-tight text-5xl text-white font-bold mt-52">Приветствуем вас на платформе <br><span
              class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-gold-1 to-gold-2 font-black">Energy Mining Gold</span>
          </h1>
          <p class="text-white mt-10 mb-10 text-2xl font-light">Realm of the galaxies across the centuries the carbon in
            our <br>apple pies vanquish the
            impossible another world venture.</p>
          <a href="#"
             class="hover:bg-gradient-to-r hover:from-zinc-800 hover:to-zinc-700 hover:text-gold-2 text-center font-medium text-zinc-800 bg-gradient-to-r from-gold-1 to-gold-2 px-5 py-3 rounded-xl font-bold">
            Открыть кошелёк
          </a>
        </div>
        <!-- Social networks -->
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

    <!-- Cards -->
    <div class="container flex flex-wrap -mt-28">
      <div class="grid grid-cols-3 gap-16 justify-content-center">
        <Card
            src="/ico/gold.svg"
            title="Объединение золота и криптовалюты"
            text="Приемущество надежности драгоценного металла и актуальность цифровой валюты"
        />
        <Card
            src="/ico/planet.svg"
            title="Децентрализованная система"
            text="Отсутствие точки управления,  контроля и отслеживания передвижения средств"
        />
        <Card
            src="/ico/graphics.svg"
            title="Минимальные риски на падение курса"
            text="Увеличение притока инвестиций и подкрепленность курсом золота"
        />
      </div>
    </div>

    <!-- Video -->
    <div class="container mt-28">
      <div class="grid grid-cols-2 content-around">
        <div class="flex items-center">
          <div>
            <h3 class="text-zinc-500 text-2xl">Short headline</h3>
            <h1 class="leading-tight text-5xl text-white font-semibold">О программе <br><span
                class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-gold-1 to-gold-2 font-semibold">Energy Mining Gold</span>
            </h1>
            <p class="text-zinc-500 mt-4 pr-16">EMG — это новый токен вобравший в себя все приемущества золота и блокчейн
              технологий. Наша Компания предлагает выгодный процент под вклады в свой токен EMG, подкрепляя стоимость
              своей монеты курсом золота на мировом рынке.
              <br><br>EMG, является персональным ключом инвестирования в оцифрованное золото. С инновационными
              алгоритмами основанных на смарт-контрактах для вашего Staking и индивидуальной партнерской программой.</p>
          </div>
        </div>
        <div class="flex justify-end">
          <img src="/images/video.png">
        </div>
      </div>
    </div>

    <!-- Passive income -->
    <div class="container mt-28">
      <div class="text-center">
        <h1 class="leading-tight text-5xl text-white font-semibold">Возможности <span
            class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-gold-1 to-gold-2 font-semibold">пассивного заработка</span>
        </h1>
        <p class="text-white mt-3 text-xl font-light text-zinc-500">Realm of the galaxies across the centuries the carbon in our apple pies vanquish the impossible another world venture. impossible another world venture.</p>
      </div>

      <div class="grid grid-cols-2 gap-24">
        <div class="flex justify-content-center">
          <Card2
              src="/ico/money.svg"
              title="Staking"
              text="Благодаря инновационным алгоритмам PoS основанных на смар-ктонтрактах, которые внедрены в наш токен EMG, любой пользователь получает вознаграждение за простое хранение наших монет на своем кошельке. Чем больше монет хранится на вашем кошельке, тем больше прибыль от стекинга."/>
        </div>
        <div class="flex justify-content-center">
          <Card2
              src="/ico/network.svg"
              title="Invitation"
              text="Это дополнительный пассивный заработок, который растет благодаря собранной вами команде и обеспечивает перспективы зарабатывать хорошие дивиденды в виде EMG+. Прибыль зависит от количества монет, купленных вашими инфайтерами."/>
        </div>
      </div>
    </div>

    <!-- Graphic -->
    <div class="flex bg-back-block-3 py-28 mt-16">
      <div class="container">
        <div class="grid grid-cols-2 gap-24 items-center">
          <div class="content-center">
            <h1 class="leading-tight text-5xl text-white font-semibold">График о монете</h1>
            <p class="text-white mt-3 text-xl font-light text-zinc-500 my-8">Команда EMG не скрывает своих планов, а,
              наоборот, дает возможность ознакомиться с ними каждому желающему и, конечно же, получить ответы на
              вопросы.</p>
            <div class="grid grid-cols-2 grid-rows-2 gap-8">
              <Card3
                  src="/ico/increasing.svg"
                  title="0.1 $"
                  text="Курс"/>
              <Card3
                  src="/ico/line-chart.svg"
                  title="300 тыс. монет"
                  text="Рыночная капитализация"/>
              <Card3
                  src="/ico/presentation.svg"
                  title="300 тыс. монет"
                  text="Полная эмиссия "/>
              <Card3
                  src="/ico/bars.svg"
                  title="300000"
                  text="Начальная эмиссия"/>
            </div>
          </div>
          <div class="content-center ml-16">
            <img src="/images/chart.png">
          </div>
        </div>
      </div>
    </div>

    <!-- Platform -->
    <div class="grid grid-cols-2 items-center mt-28">
      <div class="pl-48 pr-28">
        <h1 class="leading-tight text-5xl text-white font-semibold">Наша платформа<br> для инвестирования </h1>
        <p class="text-white mt-3 text-xl font-light text-zinc-500 mt-8">Для того, чтобы стать успешным инвестором, не
          нужно изучать тонну материала. Команда EMG облегчила вам работу и разработала платформу, на которой можно с
          легкостью управлять своими инвестициями, где четко расписан момент начисления процентов, где каждый из вас
          уже стал инвестором. </p>
      </div>
      <div class="mr-0">
        <img src="/images/devices.png">
      </div>
    </div>

    <!-- EMG -->
    <div class="container mt-16">
      <div class="text-center">
        <h1 class="leading-tight text-5xl text-white font-semibold">Как работает <span
            class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-gold-1 to-gold-2 font-bold">система EMG</span>
        </h1>
        <p class="text-white mt-3 text-xl font-light text-zinc-500 px-48">Программа инвестиций Energy Mining Gold даёт вам
          возможность стать обладателем цифрового золота, которое, в свою очередь, зависит от курса на мировом рынке</p>
      </div>
      <div class="grid grid-cols-2 gap-16 mx-16">
        <Card4
            title="Проблема"
            text="Ранее желающие инвестировать свои накопления в акции и драгоценные бумаги сталкивались с ощутимыми трудностями: определиться с брокерским агентством или банком, выбрать предмет инвестиций, заплатить внушительную комиссию"/>
        <Card4
            title="Решение"
            text="Ранее желающие инвестировать свои накопления в акции и драгоценные бумаги сталкивались с ощутимыми трудностями: определиться с брокерским агентством или банком, выбрать предмет инвестиций, заплатить внушительную комиссию"/>
      </div>
    </div>

    <!-- Road map -->
    <div class="container items-center mt-16">
      <div class="text-center">
        <h1 class="leading-tight text-5xl text-white font-semibold">Дорожная карта</h1>
        <p class="text-white mt-3 text-xl font-light text-zinc-500 px-48">Команда EMG не скрывает своих планов, а, наоборот,
          дает возможность ознакомиться с ними каждому желающему и, конечно же, получить ответы на вопросы.</p>
      </div>

      <div class="flex justify-center mt-4">
        <img src="/images/timeline.png">
      </div>
    </div>


    <!-- Documents -->
    <div class="flex bg-back-block-3 py-24 mt-28">
      <div class="container">
        <div class="text-center">
          <h1 class="leading-tight text-5xl text-white font-semibold">Документы</h1>
          <p class="text-white mt-3 text-xl font-light text-zinc-500 px-64">Команда EMG не скрывает своих планов, а, наоборот,
            дает возможность ознакомиться с ними каждому желающему и, конечно же, получить ответы на вопросы.</p>
        </div>
        <div class="grid grid-cols-3 gap-16 mt-8">
          <div class="justify-center items-center bg-back-card shadow-lg rounded-lg">
            <img src="/images/Dark%20Sharp.png" alt="img" title="img" class="w-full h-auto object-cover rounded-t-lg hover:scale-125 transition duration-500">
            <div class="w-full p-4 justify-start flex flex-col">
              <h4 class="text-xl text-center text-zinc-500">Primary mining licence</h4>
            </div>
          </div>
          <div class="justify-center items-center bg-back-card shadow-lg rounded-lg">
            <img src="/images/Dark%20Sharp2.png" alt="img" title="img" class="w-full h-auto object-cover rounded-t-lg hover:scale-125 transition duration-500">
            <div class="w-full p-4 justify-start flex flex-col">
              <h4 class="text-xl text-center text-zinc-500">Primary mining licence</h4>
            </div>
          </div>
          <div class="justify-center items-center bg-back-card shadow-lg rounded-lg">
            <img src="/images/Darc%20Sharp3.png" alt="img" title="img" class="w-full h-auto object-cover rounded-t-lg hover:scale-125 transition duration-500">
            <div class="w-full p-4 justify-start flex flex-col">
              <h4 class="text-xl text-center text-zinc-500">Primary mining licence</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Navbar from "../Navbar";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Chart from "./Chart";
import Card4 from "./Card4";
import Footer from "../Footer";

export default {
  name: "Block1",
  components: {Navbar, Card, Card2, Card3, Chart, Card4, Footer},
  dirs: [
    '~/components',
    '~/components/main'
  ]
}
</script>

<style>
</style>