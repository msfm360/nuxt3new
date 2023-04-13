<script>
export default {
  name: "Logo",
  computed: {
    language() {
      return this.$store.state.Language;
    },
  },
  data() {
    return {
      Protect: "Protect your ",
      assets: " assets",
      soloution: " with our thermal and fire resistant solutions.",
      Intumescent: "Intumescent Paint ",
      Floor_coating: "Floor Coating",
     Thermal_insulation: "Thermal Insulation",
      Thermal_Insulation_For_water: "Thermal Insulation For water Tanks  ",
      Intumescent_coatings: "Intumescent coatings",
      Learn_more: "Learn more"

    };
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const languageCode = this.$store.state.Language;
      const data = await import(`../lang/Home/${languageCode}.json`);
      this.Protect = data.Protect;
      this.assets = data.assets;
      this.soloution = data.soloution;
      this.Intumescent = data.Intumescent;
      this.Floor_coating = data.Floor_coating;
      this.Thermal_insulation = data.Thermal_insulation;
      this.Thermal_Insulation_For_water = data.Thermal_Insulation_For_water;
      this.Intumescent_coatings = data.Intumescent_coatings;
      this.Learn_more = data.Learn_more;
    },
  },
  watch: {
    language: function (newLanguage, oldLanguage) {
      this.fetchContent();
    },
  },
};
</script>

<template>
  <div class="bg-gray-200" >
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-20"
      v-motion-slide-visible-once-left
      :delay="500"
    >
      <!-- text -->
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <h2
        
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
          
        >
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="text-white"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-900 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" fill="#1b3699B"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <span class="relative">
              <!-- Protect your  -->
              {{ Protect }} </span>
          </span>
          <span class="text-[#FFA602]" :dir="language === 'ar' ? 'rtl' : 'ltr'">{{ assets}}</span>
         <span :dir="language === 'ar' ? 'rtl' : 'ltr'"> {{ soloution }} </span>
         
           <!-- with our thermal and
          fire resistant solutions. -->
        </h2>
      </div>
      <!-- end text -->
      <!-- feature -->

      <div
        class="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-5  "
      >
        <div class="text-center">
          <div
            class="flex items-center justify-center w-20 h-20 mx-auto mb-4 sm:w-24 sm:h-24"
          >
            <i
              class="fa-solid fa-fire text-white text-6xl w-12 h-12 fa-shake"
            ></i>

            <i
              class="fa-solid fa-shield text-[#FFA602] w-20 h-20 z-[-1] absolute"
            ></i>
          </div>
          <h6 class="mb-2 font-semibold leading-5 text-[#FFA602]">
            {{ Intumescent }}
          </h6>
        </div>
        <div class="text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFA602] border-solid border-2 sm:w-24 sm:h-24"
          >
            <i class="fa-solid fa-paint-roller text-white w-12 h-12"></i>
          </div>
          <h6 class="mb-2 font-semibold leading-5 text-[#FFA602]">
            {{Floor_coating}}
          </h6>
        </div>
        <div class="text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFA602] sm:w-24 sm:h-24"
          >
            <i class="fa-solid fa-temperature-half text-white w-12 h-12"></i>
          </div>
          <h6 class="mb-2 font-semibold leading-5 text-[#FFA602]">
            {{Thermal_insulation}}
          </h6>
        </div>
        <div class="text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFA602] sm:w-24 sm:h-24"
          >
            <img src="../assets/sbgEA.svg" alt="" srcset="" class="w-12 h-12">
          </div>
          <h6 class="mb-2 font-semibold leading-5 text-[#FFA602]">
            {{Thermal_Insulation_For_water}}
          </h6>
        </div>
        <div class="text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFA602] sm:w-24 sm:h-24"
          >
            <img
              src="../assets/bridge.svg"
              alt=""
              srcset=""
              class="w-12 h-12"
              fill="white"
            />
          </div>
          <h6 class="mb-2 font-semibold leading-5 text-[#FFA602]">
            {{ Intumescent_coatings }}
          </h6>
        </div>
      </div>
      <div class="text-center">
        <router-link
          to="/services"
          class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#FFA602] hover:bg-yellow-700 focus:shadow-outline focus:outline-none"
        >
          {{ Learn_more }}
          <span class="ml-1 -mr-2">
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
console.log(this.$route.path);

</script>