<template>
  <hr class="shadow-lg"  />
  <div class="" :dir="language === 'ar' ? 'rtl' : 'ltr'">
    <div
      class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="sm:col-span-2">
          <router-link
            to="/"
            aria-label="Go home"
            title="ESTEHDATH"
            class="inline-flex items-center"
          >
            <img src="../assets/image.svg" alt="" srcset="" class="w-10 h-10" />

            <span class="ml-2 text-xl font-bold tracking-wide text-[#C5943B] mr-2"
              >{{ title }}</span
            >
          </router-link>
          <div class="mt-6 lg:max-w-sm">
            <p class="text-sm text-gray-800">{{ question }}</p>
            <p class="mt-4 text-sm text-gray-800">
              {{ technical }}
            </p>
          </div>
        </div>
        <div class="space-y-2 text-sm">
          <p class="text-base font-bold tracking-wide text-[#C5943B]">
            {{ contact }}
          </p>
          <div class="flex">
            <p class="mr-1 text-gray-800">{{ Phone_Number }}:</p>
            <a
              href="tel:+966532688777"
              aria-label="Our phone"
              title="Our phone"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >+966532688777</a
            >
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">{{ Email_Address }}:</p>
            <a
              href="mailto:info@estehdath.com"
              aria-label="Our email"
              title="Our email"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >info@estehdath.com
            </a>
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">{{ Address }}:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Dammam, Saudi Arabia
            </a>
          </div>
        </div>
        <div>
          <span class="text-base font-bold tracking-wide text-[#C5943B]"
            >{{Social}}</span
          >
          <div class="flex items-center mt-1 space-x-3">
            <meta name="twitter" content="Social media account" />
            <a
              href="https://twitter.com/Estehdath117"
              class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <i class="fa-brands fa-square-twitter h-8 w-8"></i>
            </a>
            <a
              href="https://instgram.com/Estehdath1"
              class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <i class="fa-brands fa-square-instagram w-8 h-8"></i>
            </a>
            <a
              href="/"
              class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <i class="fa-brands fa-square-snapchat w-8 h-8"></i>
            </a>
          </div>
          <p class="mt-4 text-sm text-gray-500"></p>
        </div>
      </div>
      <div
        class="flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row"
      >
        <p class="text-sm text-gray-600 text-center">© {{ rights }}.</p>
        <!-- <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="/" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
          </li>
          <li>
            <a href="/" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
          </li>
          <li>
            <a href="/" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

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
      contact: "Contact",
      Phone_Number: "Phone Number",
      Email_Address: "Email Address",
      Address: "Address",
      rights: "All rights reserved",
      question: "Do you have a question?",
      technical: "Our technical support team is ready to assist you with any inquiries you may have.",
      title: "Estehdath",
      Social: "Social Media",
    };
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const languageCode = this.$store.state.Language;
      const data = await import(`../lang/Home/${languageCode}.json`);
      this.contact = data.contact;
      this.Phone_Number = data.Phone_Number;
      this.Email_Address = data.Email_Address;
      this.Address = data.Address;
      this.rights = data.rights;
      this.question = data.question;
      this.technical = data.technical;
      this.title = data.title;
      this.Social = data.Social;

    },
  },
  watch: {
    language: function (newLanguage, oldLanguage) {
      this.fetchContent();
    },
  },
};
</script>
