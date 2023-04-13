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
      contact : "Contact us",
      Email: "Email",
      Phone: "Phone",
      info: "Info",
      sales: "Sales",
    };
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const languageCode = this.$store.state.Language;
      const data = await import(`../lang/Contact/${languageCode}.json`);
      this.contact = data.contact;
      this.Email = data.Email;
      this.Phone = data.Phone;
      this.info = data.info;
      this.sales = data.sales;  
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
  <!-- ====== Contact Section Start -->
  <div class="pb-16" :dir="language === 'ar' ? 'rtl' : 'ltr'">
    <div class="container flex justify-center mx-auto pt-16">
      <div>
        <p class="text-[#FFA602] text-4xl text-center font-normal pb-3">
          {{contact}}
        </p>
        <h1
          class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto"
        >
        <!-- slogan -->
        </h1>
      </div>
    </div>
    <div class="w-full px-10 pt-10">
      <div class="container mx-auto">
        <div
          class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
        >
          <!-- card -->
          <div
            class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div class="h-300 rounded-xl overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <div
                    class="h-full w-full rounded-full shadow-lg border border-solid flex justify-center items-center text-gray-700 bg-white"
                  >
                    <i class="fa-regular fa-envelope w-24 h-24"></i>
                  </div>
                </div>
              </div>
              <div class="px-6 mt-16 text-center mb-10">
                <div class="font-bold text-3xl text-center pb-1 text-gray-700">
                  {{ Email }}
                </div>
                <span>{{info}}:</span>
                <a
                  href="mailto:info@estehdath.com
                    "
                  class="text-blue-500"
                >
                  contact@estehdath.com
                </a>
                <div>
                  <span>{{sales}}:</span>
                  <a
                    href="mailto:info@estehdath.com
                    "
                    class="text-blue-500"
                  >
                    sales@estehdath.com
                  </a>
                </div>
              </div>
            </div>
            <!-- end card -->
          </div>
          <!-- end -->
          <!-- card -->
          <div
            class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div class="h-300 rounded-xl overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <div
                    class="h-full w-full rounded-full shadow-lg border border-solid flex justify-center items-center text-gray-700 bg-white"
                  >
                    <i class="fa-brands fa-whatsapp w-24 h-24"></i>
                  </div>
                </div>
              </div>
              <div class="px-6 mt-16 text-center mb-20">
                <div class="font-bold text-3xl text-center pb-1 text-gray-700">
                  Whatsapp
                </div>
                <!-- whatsapp -->
                {{sales}} :
                <a
                  href="https://wa.me/966532688777"
                  class="text-blue-500"
                  target="_blank"
                  >+966532688777</a
                >
              </div>
            </div>
            <!-- end card -->
          </div>
          <!-- end -->
          <!-- card -->
          <div
            class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div class="h-300 rounded-xl overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <div
                    class="h-full w-full rounded-full shadow-lg border border-solid flex justify-center items-center text-gray-700 bg-white"
                  >
                    <i class="fa-solid fa-phone w-20 h-20"></i>
                  </div>
                </div>
              </div>
              <div class="px-6 mt-16 text-center mb-20">
                <div class="font-bold text-3xl text-center pb-1 text-gray-700">
                  {{Phone}}
                </div>
                <div>
                  <span>{{sales}}:</span>
                  <a href="tel:+966554924555" class="text-blue-500">
                    +966554924555
                  </a>
                </div>
                <div></div>
              </div>
            </div>
            <!-- end card -->
          </div>
          <!-- end -->
          <!-- card  -->
        </div>
      </div>
    </div>
  </div>
  <!-- ====== Contact Section End -->
</template>
