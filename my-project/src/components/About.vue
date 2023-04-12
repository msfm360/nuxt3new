<script>
export default {
  name: "Hero",
  computed: {
    language() {
      return this.$store.state.Language;
    },
  },
  data() {
    return {
      About_us_Let: "Let us",
      About_us_protect: "protect",
      About_us_your: "your property with our coating and insulation services.",
      About_content:
        "Estehdath offers coating and insulation services to protect your property from water, fire, and heat. We have the best solutions for water tanks, floors, fire-resistant paint, and thermal insulation. We are experienced and reliable.",
    };
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const languageCode = this.$store.state.Language;
      const data = await import(`../lang/Home/${languageCode}.json`);
      this.About_us_Let = data.About_us_Let;
      this.About_us_protect = data.About_us_protect;
      this.About_us_your = data.About_us_your;
      this.About_content = data.About_content;

    },
  },
  watch: {
    language: function (newLanguage, oldLanguage) {
      this.fetchContent();
    },
  },
};
</script>

<template dir="rtl">
  <div class="bg-yellow-600">
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div v-motion-pop :delay="500">
        <i
          class="absolute fa fa-shield text-white z-0 w-96 h-96 opacity-20"
        ></i>
      </div>

      <div class="grid gap-10 lg:grid-cols-2">
        <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div class="max-w-xl mb-6" v-motion-slide-right :delay="1000" :dir="language === 'ar' ? 'rtl' : 'ltr'">
            <h2
              class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
            >
              <!-- Let us -->
              {{ About_us_Let }}
              <div class="inline-block">
                <span class="inline-block bg-blue-500">
                  <!-- protect -->
                  {{ About_us_protect }}
                </span>
              </div>
              <!-- your property with our coating and insulation services. -->
              {{ About_us_your }}
            </h2>
            <p class="text-base text-gray-100 md:text-lg">
              {{ About_content  }}
              <!-- Estehdath offers coating and insulation services to protect your
              property from water, fire, and heat. We have the best solutions
              for water tanks, floors, fire-resistant paint, and thermal
              insulation. We are experienced and reliable. -->
            </p>
          </div>
          <div>
            <!-- <router-link
              to="/about"
              aria-label=""
              class="inline-flex items-center font-semibold transition-colors duration-200 text-yellow-500 hover:text-yellow-100 z-30"
            >
              Learn more
              <svg
                class="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path
                  d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                ></path>
              </svg>
            </router-link> -->
          </div>
        </div>

        <!--  -->
        <div class="flex items-center justify-center -mx-4 lg:pl-8">
          <div class="flex flex-col items-end px-3">
            <img
              class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 bg-teal-400"
              src="../assets/img.jpg"
              alt=""
            />
            <img
              class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 bg-indigo-400"
              src="../assets/img2.jpg"
              alt=""
            />
          </div>
          <div class="px-3">
            <img
              class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 bg-blue-400"
              src="../assets/img3.jpg"
              alt=""
            />
          </div>
        </div>

        <!--  -->
      </div>
    </div>
  </div>

  <!--                          -->
</template>
