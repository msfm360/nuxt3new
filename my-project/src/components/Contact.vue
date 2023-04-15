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
      Contact_Us_contact: "Contact Us",
      Let_Connect: "Let's Connect!",
      We_just_click_away: "We're just a click away",
      click_away: "click away",
      Our_Location: "Our Location",
      How_Can_We_Help: "How Can We Help?",
      Send_us_a_Message: "Send us a Message",
      Full_Name: "Full Name",
      Email_Address: "Email Address",
      Phone_Number: "Phone Number",
      Message: "Message",
      Send_Message: "Send Message",
      or: "or",
    };
  },
  created() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      const languageCode = this.$store.state.Language;
      const data = await import(`../lang/Home/${languageCode}.json`);
      this.Contact_Us_contact = data.Contact_Us_contact;
      console.log(data.Contact_Us_contact);
      this.Let_Connect = data.Let_Connect;
      this.We_just_click_away = data.We_just_click_away;
      this.click_away = data.click_away;
      this.Our_Location = data.Our_Location;
      this.How_Can_We_Help = data.How_Can_We_Help;
      this.Send_us_a_Message = data.Send_us_a_Message;
      this.Full_Name = data.Full_Name;
      this.Email_Address = data.Email_Address;
      this.Phone_Number = data.Phone_Number;
      this.Message = data.Message;
      this.Send_Message = data.Send_Message;
      this.or = data.or;
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
    class="relative py-20 md:py-[120px]"
    :dir="language === 'ar' ? 'rtl' : 'ltr'"
  >
    <div
      class="absolute top-0 left-0 z-[-1] h-1/2 w-full bg-gray-200 lg:h-[45%] xl:h-1/2"
    ></div>
    <div class="container px-4 mx-auto">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="w-full px-4 lg:w-7/12 xl:w-8/12">
          <div class="ud-contact-content-wrapper">
            <div class="ud-contact-title mb-12 lg:mb-[150px] bg-wh">
              <span class="mb-5 text-base font-semibold text-dark">
                {{ Contact_Us_contact }}
              </span>
              <h2 class="text-4xl font-semibold">
                {{ Let_Connect }}
                <div class="mt-2">
                  {{ We_just_click_away }}
                  <span class="bg-[#FFA602] text-white">{{ click_away }} </span>
                </div>
              </h2>
            </div>
            <div class="mb-12 flex flex-wrap justify-between lg:mb-0">
              <div class="mb-8 flex w-[330px] max-w-full">
                <div class="mr-6 text-[32px] text-primary">
                  <svg
                    width="29"
                    height="35"
                    viewBox="0 0 29 35"
                    class="fill-current"
                  >
                    <path
                      d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z"
                    />
                    <path
                      d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z"
                    />
                  </svg>
                </div>
                <div>
                  <h5
                    class="mb-6 text-lg font-semibold text-[#FFA602] ml-2 mr-2"
                  >
                    {{ Our_Location }}
                  </h5>
                  <div class="text-base text-body-color">
                    Find Us in Dammam, Saudi Arabia
                    <div>
                      <a
                        href="https://goo.gl/maps/gAgAfzpRoj9vqC117"
                        target="_blank"
                        >View on Google Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-8 flex w-[330px] max-w-full">
                <div class="mr-6 text-[32px] text-primary">
                  <svg
                    width="34"
                    height="25"
                    viewBox="0 0 34 25"
                    class="fill-current"
                  >
                    <path
                      d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z"
                    />
                  </svg>
                </div>
                <div class="">
                  <h5
                    class="mb-6 text-lg font-semibold ml-2 mr-2 text-[#FFA602]"
                  >
                    {{ How_Can_We_Help }}
                  </h5>
                  <div class="">
                    <span><i class="fas fa-envelope text-4xl"></i></span
                    ><a
                      href="mailto:contact@estehdath.com"
                      class="text-base text-body-color"
                    >
                      contact@estehdath.com</a
                    >
                  </div>
                  <div class="mt-2">
                    <span><i class="fa fa-phone text-4xl"></i></span
                    ><a
                      href="tel:+966532688777"
                      class="text-base text-body-color"
                    >
                    +966532688777</a
                    >
                  </div>
                  <p class="text-base text-body-color mt-2">
                    <a href="https://wa.me/966532688777" target="_blank">
                      <i class="fab fa-whatsapp text-4xl"></i>
                    </a>
                    <a href="https://wa.me/966532688777"> 0532688777</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 lg:w-5/12 xl:w-4/12">
          <div
            class="rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px] shadow-lg"
            data-wow-delay=".2s
              "
          >
            <h3 class="mb-8 text-4xl font-semibold md:text-4xl text-[#FFA602]">
              {{ Send_us_a_Message }}
            </h3>
            <form
              name="contact"
              method="POST" netlify          >
              <input type="hidden" name="form-name" value="contact" />
              <div class="mb-6">
                <label for="fullName" class="block text-xs text-dark"
                  >{{ Full_Name }}*
                  <input
                    type="text"
                    name="fullName"
                    placeholder="First and Last Name "
                    class="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-gray-200 focus:outline-none"
                    required
                  />
                </label>
              </div>
              <div class="mb-6">
                <label for="email" class="block text-xs text-dark"
                  >{{ Email_Address }}*
                  <input
                    type="email"
                    name="email"
                    placeholder="example@yourmail.com"
                    class="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-gray-200 focus:outline-none"
                    required
                  />
                </label>
              </div>
              <div class="mb-6">
                <label for="phone" class="block text-xs text-dark"
                  >{{ Phone_Number }}*
                  <input
                    type="number"
                    name="phone"
                    placeholder="+966 555 555 555"
                    class="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-gray-200 focus:outline-none"
                    required
                  />
                </label>
              </div>
              <div class="mb-6">
                <label for="message" class="block text-xs text-dark"
                  >{{ Message }}*
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="type your message here"
                    class="w-full resize-none border-0 border-b border-[#f1f1f1] py-4 focus:border-gray-200 focus:outline-none"
                    required
                  ></textarea>
                </label>
              </div>
              <div class="mb-0 flex flex-col">
                <button
                  type="submit"
                  class="inline-flex items-center justify-center rounded bg-[#FFA602] py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
                >
                  {{ Send_Message }}
                </button>
                <div class="relative flex py-5 items-center">
                  <div class="flex-grow border-t border-gray-400"></div>
                  <span class="flex-shrink mx-4 text-gray-400">{{or}}</span>
                  <div class="flex-grow border-t border-gray-400"></div>
                </div>
                <a
                  href="https://wa.me/966532688777"
                  class="inline-flex items-center justify-center rounded bg-green-600 py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"  target="_blank"
                >
                  <i class="fab fa-whatsapp w-30 h-30 ml-2 mr-2"></i> Whatsapp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
