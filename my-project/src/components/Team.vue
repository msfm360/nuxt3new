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
      title: "Estehdath",
      Team:'The teamwork is considered the cornerstone upon which all successful companies are built. Therefore, our company, "Estehdath", attracts the best scientific expertise and skilled labor, in addition to following the best safety practices. We also provide the best industrial devices and equipment to ensure the best and most complete implementation of our work. We also invest in developing the knowledge of our employees by providing them with opportunities to attend training courses and workshops in the finest training institutes and scientific institutions.',
    };
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const languageCode = this.$store.state.Language;
      const data = await import(`../lang/Home/${languageCode}.json`);
      this.title = data.title;
      this.Team = data.Team;
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
  <section
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 shadow-lg"
  >
    <div class="" />
    <div class="" />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <div class="mx-auto text-center">
        <a href="/" aria-label="Go home" title="Company" class="">
          <img src="../assets/image.svg" alt="" srcset="" class="w-12 h-12 inline-block">
            <span class="text-2xl font-bold tracking-wide text-[#C5943B]"> {{ title }}</span>

        </a>
      </div>
      <figure class="mt-10" :dir="language === 'ar' ? 'rtl' : 'ltr'">
        <blockquote
          class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"
        >
          <p>
            {{ Team }}
            <!-- Our company’s success depends on our work team. That’s why we
            recruit the most experienced and skilled professionals and adhere to
            the best safety practices. We also supply our team with the latest
            devices, tools and equipment to achieve the highest quality and
            efficiency in our work. In addition, we foster our team’s learning
            by enabling them to participate in training courses and workshops.” -->
          </p>
        </blockquote>
      </figure>
    </div>
  </section>
</template>
