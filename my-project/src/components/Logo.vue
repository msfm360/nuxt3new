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
      Logo: "We choose our suppliers carefully to ensure the highest standards of quality and safety",
    };
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const languageCode = this.$store.state.Language;
      const data = await import(`../lang/Home/${languageCode}.json`);
      this.Logo = data.Logo;
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
  <div class="bg-white py-10 sm:py-10 bg-no-repeat bg-center">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
        <!-- We choose our suppliers carefully to ensure the highest standards of
        quality and safety -->
        {{ Logo }}
      </h2>
      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <a href="https://jazeerapaints.com/" target="_blank"
          ><img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
            src="../assets/logos/jazeera.svg"
            alt="logos jazeera"
            width="158"
            height="48"
        /></a>
        <a href="https://www.basf.com/sa/en.html/" target="_blank"
          ><img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
            src="../assets/logos/BASF.svg"
            alt="logo BASF "
            width="158"
            height="48"
        /></a>
        <a href="https://www.sika.com/" target="_blank"
          ><img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
            src="../assets/logos/sika.svg"
            alt="logo sika"
            width="158"
            height="48"
        /></a>
        <a href="https://fosroc.com/" target="_blank"
          ><img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
            src="../assets/logos/fosroc.svg"
            alt="logo fosroc"
            width="158"
            height="48"
        /></a>
        <a href="https://www.hempel.com/ar-me" target="_blank"
          ><img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
            src="../assets/logos/hempel.svg"
            alt="logo hempel"
            width="158"
            height="48"
        /></a>
        <a href="https://sigmapaints.com/" target="_blank" class="text-center"
          ><img
            class="col-span-1 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
            src="../assets/logos/sigma.svg"
            alt="logo sigma"
            width="158"
            height="48"
        /></a>
        <a href="https://www.jotun.com/" target="_blank" class="text-center"
          ><img
            class="col-span-1 max-h-12 w-full object-contain lg:col-span-1 duration-300 hover:filter-none"
            src="../assets/logos/jotun.svg"
            alt="logo jotun"
            width="158"
            height="48"
        /></a>
      </div>
    </div>
  </div>
</template>
