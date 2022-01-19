<template>
  <div>
    <div class="text-white ml-8">
      <h3 class="leading-tight text-3xl text-white my-4">Настройки</h3>
      <p class="text-white text-xl font-light text-gray-500">Вы можете изменить свои основные данные</p>

      <div class="ml-8 bg-gradient-to-l from-gold-2 to-gold-1 mt-16 rounded-xl text-white pl-4 py-4 flex justify-between items-center">
        <div>
          <svg class="inline-block" fill="none" height="27" viewBox="0 0 27 27" width="27"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.6 25.925H22.5C25.2 25.925 26.8 23.022 25.6 20.6195L16.6 3.80194C15.3 1.29934 11.8 1.29934 10.5 3.80194L1.5 20.6195C0.299997 23.022 1.9 25.925 4.6 25.925Z"
                stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
            <path
                d="M13.9 18.0168H13.2C12.5 18.0168 12.6 17.4162 12.6 16.7154L11.9 9.30769C11.9 8.60696 12.5 8.00635 13.2 8.00635H13.9C14.6 8.00635 15.2 8.60696 15.2 9.30769L14.5 16.7154C14.5 17.4162 14.6 18.0168 13.9 18.0168Z"
                fill="#4F4F4F"/>
            <path
                d="M13.5 21.9208C14.4389 21.9208 15.2 21.3382 15.2 20.6195C15.2 19.9008 14.4389 19.3181 13.5 19.3181C12.5611 19.3181 11.8 19.9008 11.8 20.6195C11.8 21.3382 12.5611 21.9208 13.5 21.9208Z"
                fill="#4F4F4F"/>
          </svg>
          <span class="text-zinc-800">Подтвердите свою почту!</span>
        </div>
        <div class="inline-block">
          <svg class="h-3 w-3 mr-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329.26933 329">
            <path
                d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
          </svg>
        </div>
      </div>



      <div class="ml-8 bg-back-card mt-16 rounded-xl text-white pl-4 py-4 flex justify-between items-center">
        <div class="w-full mx-auto mt-4 text-white rounded">
          <ul id="tabs" class="inline-flex w-full px-1 pt-2">
            <li class="px-4 py-2 -mb-px font-semibold border-b-2 border-gold-2 rounded-t opacity-50"><a id="default-tab" href="#first">Основные</a></li>
            <li class="px-4 py-2 font-semibold rounded-t opacity-50"><a href="#second">Партнерская программа</a></li>
          </ul>

          <div id="tab-contents">
            <div id="first" class="p-4">
              <div class="flex pr-32 space-x-8 mt-4">
                <div class="w-full w-1/3 flex flex-col">
                  <label class="font-light text-gray-300">Имя</label>
                  <input type="text" class="leading-none text-white focus:outline-none focus:border-gold-2 focus:ring-gold-2 bg-zinc-600 border-zinc-600 rounded" />
                </div>
                <div class="w-full w-1/3 flex flex-col">
                  <label class="font-light text-gray-300">Фамилия</label>
                  <input type="text" class="leading-none text-white focus:outline-none focus:border-gold-2 focus:ring-gold-2 bg-zinc-600 border-zinc-600 border rounded" />
                </div>
                <div class="w-full w-1/3 flex flex-col">
                  <label class="font-light text-gray-300">Отчество</label>
                  <input type="text" class="leading-none text-white focus:outline-none focus:border-gold-2 focus:ring-gold-2 bg-zinc-600 border-zinc-600 border rounded" />
                </div>
              </div>
              <div class="flex pr-32 flex-col">
                <div class="w-full w-1/3 flex flex-col mt-8 pr-5">
                  <label class="font-light text-gray-300">Имя</label>
                  <input type="text" class="leading-none text-white focus:outline-none focus:border-gold-2 focus:ring-gold-2 bg-zinc-600 border-zinc-600 border rounded" />
                </div>
                <div class="w-full w-1/3 flex flex-col mt-8 pr-5">
                  <label class="font-light text-gray-300">Имя</label>
                  <input type="text" class="leading-none text-white focus:outline-none focus:border-gold-2 focus:ring-gold-2 bg-zinc-600 border-zinc-600 border rounded" />
                </div>
                <div class="w-full w-1/3 flex flex-col mt-8 pr-5">
                  <div class="flex flex-col justify-center relative overflow-hidden sm:py-12">
                    <div class="w-full px-8 py-4 mx-auto bg-white text-gray-600 rounded-lg shadow-md dark:bg-gray-800">
                      <ul class="w-full max-w-lg">
                        <li aria-expanded="true" class="border-b border-gray-200 group" v-for="i in 5">
                          <button class="flex w-full justify-between py-2 px-2 bg-gray-100 hover:bg-gray-200">
                            <span> item {{i}}</span>
                            <span>
            <svg class="h-6 fill-current text-gray-500 transform -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
          </span>
                          </button>
                          <div class="px-2 bg-gray-50  h-0 overflow-hidden group-hover:h-full transition-height">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque rem quod hic, magnam quis vero nobis cumque esse cum fugit maxime blanditiis quae maiores sint nisi? Vitae dolorem tempora nobis?</div>
                        </li>

                      </ul>
                    </div>
                  </div>


<!--                  <div x-data={show:false} class="w-full">-->
<!--                    <p class="flex">-->
<!--                      <a x-on:click.prevent="show=!show" class="bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-3 cursor-pointer focus:outline-none mr-2">-->
<!--                        Link with href-->
<!--                      </a>-->
<!--                    </p>-->
<!--                    <div x-show="show" class="border px-4 py-3 my-2 text-gray-700">-->

<!--                    </div>-->
<!--                  </div>-->
                </div>

              </div>

            </div>
            <div id="second" class="hidden p-4">
              Партнерская программа
            </div>
          </div>
        </div>
        <script>
          let tabsContainer = document.querySelector("#tabs");

          let tabTogglers = tabsContainer.querySelectorAll("a");
          console.log(tabTogglers);

          tabTogglers.forEach(function(toggler) {
            toggler.addEventListener("click", function(e) {
              e.preventDefault();

              let tabName = this.getAttribute("href");

              let tabContents = document.querySelector("#tab-contents");

              for (let i = 0; i < tabContents.children.length; i++) {

                tabTogglers[i].parentElement.classList.remove("border-gold-2", "border-b-2", "opacity-100");  tabContents.children[i].classList.remove("hidden");
                if ("#" + tabContents.children[i].id === tabName) {
                  continue;
                }
                tabContents.children[i].classList.add("hidden");

              }
              e.target.parentElement.classList.add("border-gold-2", "border-b-2", "-mb-px", "opacity-100");
            });
          });

          document.getElementById("default-tab").click();

        </script>
      </div>
    </div>
    <script src="https://unpkg.com/petite-vue" defer init></script>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
  </div>
</template>

<script>
export default {
  name: "Setting.vue"
}
</script>