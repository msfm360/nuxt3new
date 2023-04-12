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
      heroContent:
        "We cover all your coating and insulation needs. Whether you need intumescent paint, floor coating, water and thermal insulation, we have you covered. We use the latest technology and materials to ensure quality and durability.",
    };
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const languageCode = this.$store.state.Language;
      const response = await fetch(
        `https://strapi-bbid.onrender.com/api/heroes?locale=${languageCode}`
      );
      const data = await response.json();
      this.heroContent = data.data[0].attributes.content;
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
  <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
    <div
      class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
    >
      <svg
        class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
        viewBox="0 0 100 100"
        fill="currentColor"
        preserveAspectRatio="none slice"
      >
        <path d="M50 0H100L50 100H0L50 0Z "></path>
      </svg>
      <!-- <img
        class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        src="../assets/backgroundMain.avif"
        alt=""
      /> -->
      <picture>
        <source type="image/avif" srcset="../assets/backgroundMain.avif" />
        <source type="image/webp" srcset="../assets/backgroundMain.avif" />
        <img
          class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="../assets/backgroundMain.avif"
          alt="background image for main page"
        />
      </picture>
    </div>

    <div
      class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
    >
      <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <h2
          class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none transition duration-500 transform hover:-translate-y-1"
        >
          We cover all your
          <div class="inline-block" v-motion-roll-left :delay="500">
            <span class="text-blue-500"> coating </span>
          </div>
          and
          <div class="inline-block" v-motion-roll-left :delay="500">
            <span class="text-blue-500"> insulation </span>
          </div>
          needs
        </h2>
        <p class="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          {{ heroContent }}
        </p>
        <div class="flex items-center">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-900 focus:shadow-outline focus:outline-none"
          >
            Contact us today
          </router-link>
          <router-link
            to="/Services"
            aria-label=""
            class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-700"
            >Learn more</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
