<template>
  <div class="mx-auto container xl:px-0 mt-12 shadow-2xl mb-10">
    <div
      class="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32 justify-end items-end rounded-lg"
    >
      <img
        src="../assets/background.webp"
        alt="background for services page"
        class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center blur-sm"
      />
      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <h2
            class="font-bold tracking-tight text-white sm:text-6xl lg:whitespace-nowrap text-4xl"
            :dir="language === 'ar' ? 'rtl' : 'ltr'"
            v-motion-fade
          >
            {{ Main_activities_of_Estehdath }}
          </h2>
        </div>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div
            class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"
          >
            <a v-for="link in links" :key="link.name" :href="link.href"
              >{{ link.name }} <span aria-hidden="true">&rarr;</span></a
            >
          </div>
          <dl
            class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div
              v-for="stat in stats"
              :key="stat.name"
              class="flex flex-col-reverse"
            >
              <dt class="text-base leading-7 text-gray-300">{{ stat.name }}</dt>
              <dd
                class="text-2xl font-bold leading-9 tracking-tight text-white"
              >
                {{ stat.value }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div
      class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center"
      v-motion-slide-right
      :delay="200"
    >
      <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2
          class="font-extrabold sm:text-4xl lg:whitespace-nowrap text-blue-500 dark:text-white"
        >
          <span
            class="block text-6xl text-center lg:whitespace-nowrap sm:text-4xl"
          >
            {{ Protective_coatings }}
          </span>
        </h2>
        <p class="text-2xl mt-4 text-gray-400 text-center">
          {{ Protective_coatings_description }}
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0"></div>
      </div>
      <div class="flex items-center gap-8 p-8 lg:p-24">
        <img
          src="../assets/Protective_coatings_image.png"
          class="rounded-lg object-cover h-full w-[70rem] shadow-xl"
          alt="Tree"
        />
      </div>
    </div>
    <div
      class="bg-slate-200 dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center"
      v-motion-slide-visible-left
      :delay="200"
    >
      <div class="flex items-center gap-8 p-8 lg:p-24 justify-center">
        <img
          src="../assets/Fire_proofing_coatings.webp"
          class="rounded-lg object-cover h-full w-[70rem] shadow-xl"
          alt="Tree"
        />
      </div>
      <div
        class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
        :dir="language === 'ar' ? 'rtl' : 'ltr'"
      >
        <h2 class="font-extrabold text-[#C5943B] dark:text-white sm:text-4xl">
          <span
            class="block text-6xl text-center lg:whitespace-nowrap sm:text-4xl"
          >
            {{ Fire_proofing_coatings }}
          </span>
        </h2>
        <p class="text-2xl mt-4 text-gray-600 text-center">
          {{ Fire_proofing_coatings_description }}
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0"></div>
      </div>
    </div>

    <div
      class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center"
      v-motion-slide-visible-right
      :delay="200"
    >
      <div
        class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
        :dir="language === 'ar' ? 'rtl' : 'ltr'"
      >
        <div class="font-extrabold text-blue-500 dark:text-white sm:text-4xl">
          <span
            class="block text-6xl text-center lg:whitespace-nowrap sm:text-4xl"
          >
            {{ Floor_coatings }}
          </span>
        </div>
        <p class="text-2xl mt-4 text-gray-600 text-center">
          {{ Floor_coatings_description }}
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0"></div>
      </div>
      <div class="flex items-center gap-8 p-8 lg:p-24">
        <img
          src="../assets/img2.jpg"
          class="rounded-lg object-cover h-full w-[70rem] shadow-xl"
          alt="Tree"
        />
      </div>
    </div>
    <div
      class="bg-slate-200 dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center"
      v-motion-slide-visible-left
      :delay="200"
    >
      <div class="flex items-center gap-8 p-8 lg:p-24 justify-center">
        <img
          src="../assets/Insulation.webp"
          class="rounded-lg object-cover h-full w-[70rem] shadow-xl"
          alt="Tree"
        />
      </div>
      <div
        class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
        :dir="language === 'ar' ? 'rtl' : 'ltr'"
      >
        <h2 class="font-extrabold text-[#C5943B] dark:text-white sm:text-4xl">
          <span
            class="block text-6xl text-center lg:whitespace-nowrap sm:text-4xl"
          >
            {{ Insulation }}
          </span>
        </h2>
        <p class="text-2xl mt-4 text-gray-600 text-center">
          {{ Insulation_description }}
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0"></div>
      </div>
    </div>

    <div
      class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center"
      v-motion-slide-visible-right
      :delay="200"
    >
      <div
        class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
        :dir="language === 'ar' ? 'rtl' : 'ltr'"
      >
        <h2 class="font-extrabold text-blue-500 dark:text-white sm:text-4xl">
          <span
            class="block text-6xl text-center lg:whitespace-nowrap sm:text-4xl"
          >
            {{ Tank_protection_coatings }}
          </span>
        </h2>
        <p class="text-2xl mt-4 text-gray-600 text-center">
          {{ Tank_protection_coatings_description }}
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0"></div>
      </div>

      <div class="flex items-center gap-8 p-8 lg:p-24">
        <img
          src="../assets/tank.jpg"
          class="rounded-lg object-cover h-full w-[70rem] shadow-xl"
          alt="picture for tank protection coatings"
        />
      </div>
    </div>

    <div class="relative bg-cover bg-left h-96 bg-slate-200 shadow-md">
      <img
        src="../assets/bridge-full.webp"
        alt="picture of a bridge with a sunset in the background"
        srcset=""
        class="object-cover w-full h-full opacity-25 blur-sm"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-4xl font-extrabold text-[#C5943B] mb-4">
            {{ Coating_for_concrete_structure }}
          </h2>
          <p class="text-lg text-gray-600 font-bold flex ml-6 mr-6">
            {{ Coating_for_concrete_structure_description }}
          </p>
        </div>
      </div>
    </div>

    <!-- ok -->
    <div
      class="relative isolate overflow-hidden"
      :dir="language === 'ar' ? 'rtl' : 'ltr'"
    ></div>
  </div>
</template>

<script>
export default {
  name: "services",
  computed: {
    language() {
      return this.$store.state.Language;
    },
  },
  data() {
    return {
      Main_activities_of_Estehdath: "Main activities of Estehdath",
      Main_activities_of_Estehdath_description:
        "As a specialized contracting company, we require technical knowledge and high execution skills in our main fields",
      Protective_coatings: "Protective coatings",
      Protective_coatings_image: "../assets/Protective_coatings_image.png",
      Protective_coatings_description:
        "We execute projects for protective coatings against rust and corrosion on steel surfaces according to the highest international standards for implementing this type of project, based on a scientific and technical approach, and using the best materials and paints. Our projects cover petroleum and gas facilities, bridges, iron towers, steel structures, etc.",
      Fire_proofing_coatings: "Fire-proofing coatings",
      Fire_proofing_coatings_description:
        "Our company executes fire protection coating projects for steel structures according to the conditions of civil defense and the Saudi building code. We use the best equipment and highly skilled technicians in this field for industrial, commercial, and civil facilities such as factories, iron towers, airports, warehouses, etc.",
      Floor_coatings: "Floor coatings",
      Floor_coatings_description:
        "Our company executes floor coating projects for factories such as food factories, parking lots, laboratories, and airports using the best tools and techniques",
      Tank_protection_coatings: "Tank protection coatings",
      Tank_protection_coatings_description:
        "We apply the best products to coat tanks to protect them from corrosion, such as drinking water tanks and chemical storage tanks.",
      Insulation: "Insulation",
      Insulation_description:
        "Our company executes thermal and water insulation projects for industrial, civil, and commercial facilities such as factories, malls, and warehouses",
      Coating_for_concrete_structure: "Coating for concrete structure",
      Coating_for_concrete_structure_description:
        "Our company executes projects for protecting concrete structures from corrosion by using the latest anti-carbonation materials, such as bridges.",
    };
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const languageCode = this.$store.state.Language;
      const data = await import(`../lang/servicesView/${languageCode}.json`);
      console.log(data.Fire_proofing_coatings);
      this.Main_activities_of_Estehdath = data.Main_activities_of_Estehdath;
      this.Main_activities_of_Estehdath_description =
        data.Main_activities_of_Estehdath_description;
      this.Protective_coatings = data.Protective_coatings;
      this.Protective_coatings_description =
        data.Protective_coatings_description;
      this.Fire_proofing_coatings = data.Fire_proofing_coatings;
      this.Fire_proofing_coatings_description =
        data.Fire_proofing_coatings_description;
      this.Floor_coatings = data.Floor_coatings;
      this.Floor_coatings_description = data.Floor_coatings_description;
      this.Tank_protection_coatings = data.Tank_protection_coatings;
      this.Tank_protection_coatings_description =
        data.Tank_protection_coatings_description;
      this.Insulation = data.Insulation;
      this.Insulation_description = data.Insulation_description;
      this.Coating_for_concrete_structure = data.Coating_for_concrete_structure;
      this.Coating_for_concrete_structure_description =
        data.Coating_for_concrete_structure_description;
    },
  },
  watch: {
    language: function (newLanguage, oldLanguage) {
      this.fetchContent();
    },
  },
  computed: {
    pageTitle() {
      // This is where you can set the title of your page dynamically
      return 'Services';
    },
  },
  mounted() {
    // Set the page title when the component is mounted
    document.title = this.pageTitle;
  },
};
</script>
<style></style>
