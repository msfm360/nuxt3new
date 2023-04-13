<template lang="">
  <div class="relative" :dir="language === 'ar' ? 'rtl' : 'ltr'">
    <img src="../assets/backgroundMain.webp" alt="" srcset="" class="h-[40rem] w-full flex flex-col object-cover  object-center">
    <div class="absolute bottom-0 p-4" >
      <div class="text-white text-6xl max-sm:text-4xl [text-shadow:_0_0.2rem_0_rgb(0_0_0_/_40%)]"> {{Main}}</div>
      <br>
      <!-- <div class="text-white text-2xl max-sm:text-4xl [text-shadow:_0_0.2rem_0_rgb(0_0_0_/_40%)]		" v-motion-fade :delay="400">{{slogan}}</div> -->
    </div>
  </div>
  <section :dir="language === 'ar' ? 'rtl' : 'ltr'">
    <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"   v-motion-slide-right :delay="500"
  >
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="lg:max-w-lg">
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-[#C5943B] sm:text-4xl">{{mission}}</h1>
          <p class="mt-6 text-xl leading-8 text-gray-700">{{mission_content}}</p>
        </div>
      </div>
    </div>
    <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
    <img :src="currentImage" class="w-[48rem] xl:max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 max-sm:w-[30rem] sm:w-[57rem] " alt="images that show our matraila and equpmenet">
    </div>
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    <div class="lg:pr-4">
      <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
        <div class="text-[#C5943B] text-2xl">{{services}} :</div>
        <ul role="list" class="mt-8 space-y-8 text-gray-600">
          <li v-for="(item, index) in items" :key="index" class="flex gap-x-3">
            <!-- <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
            </svg> -->
            <span><strong class="font-semibold text-gray-900">{{index+1}} - {{ item }}</strong></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</div>

  </section>

</template>
<script>
export default {
  data() {
    return {
      Main:"Main activities of Estehdath",
      slogan: "Specialized contracting that requires high technical knowledge and high execution skill",
      items: [
        'Protective coatings',
        'Fire-proofing coatings',
        'Floor coatings',
        'Tank protection coatings',
        'Insulation',
        'Coating for concrete structure',
      ],
      images: [
        "/assets/mat.svg",
        "/assets/Elcometer.webp",
        
      ],
      mission:"Our mission is to protect your assets",
      mission_content:"Our services include intumescent paint, floor coating, water and thermal insulation, coating for concrete structures, and more. We use only the best materials and equipment to ensure quality and durability of our work. We also provide free consultation and quotation for every project.",
      services:"Our services",
      
      currentIndex: 0
    };
  },
  computed: {
    language() {
      return this.$store.state.Language;
    },
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const languageCode = this.$store.state.Language;
      const data = await import(`../lang/About/${languageCode}.json`);
      this.Main = data.Main;
      this.slogan = data.slogan;
      this.items = data.items;
      this.mission = data.mission;
      this.mission_content = data.mission_content;
      this.services = data.services;
      

    },
  },
  watch: {
    language: function (newLanguage, oldLanguage) {
      this.fetchContent();
    },
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }
};
</script>
