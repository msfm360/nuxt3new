<script>
export default {
  name: "Headers",
  data() {
    return {
      currentLanguage: "en", // set default language to English
      languages: [
        { code: "en", name: "English" },
        { code: "ar", name: "عربي" },
      ],
      title: "Estehdath",
    };
  },
  methods: {
    async changeLanguage(languageCode) {
      // set the current language to the selected language
      this.currentLanguage = languageCode;

      // update the language in Vuex
      this.$store.commit("setLanguage", languageCode);

      // call the API with the selected language code
      const response = await fetch(
        `https://strapi-bbid.onrender.com/api/enwan-almwqes?locale=${languageCode}`
      );
      const data = await response.json();
      this.title = data.data[0].attributes.title;
    },
  },
};
</script>

<template>
  <header class=" z-30 ">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a
          href="/"
          aria-label="Go home"
          title="Company"
          class="inline-flex items-center"
        >
          <svg
            class="w-8 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            stroke-linejoin="round"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12"></rect>
            <rect x="3" y="17" width="7" height="6"></rect>
            <rect x="14" y="1" width="7" height="6"></rect>
            <rect x="14" y="11" width="7" height="12"></rect>
          </svg>
          <span
            class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
          >
            {{ title }}</span
          >
        </a>
      </div>
      <div class="flex lg:hidden ">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-slate-100"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <router-link to="/" class="text-sm font-semibold leading-6 text-gray-900"
          >Home</router-link
        >
        <router-link to="/Services" class="text-sm font-semibold leading-6 text-gray-900"
          >Services</router-link
        >

        <router-link to="/About" class="text-sm font-semibold leading-6 text-gray-900"
          >About us</router-link
        >
        <router-link to="/Contact" class="text-sm font-semibold leading-6 text-gray-900"
          >Contact</router-link
        >

      </PopoverGroup>
      <!-- langauge lg screen -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <Popover class="relative">
          <PopoverButton
            class="inline-flex items-center gap-x-1 text-xs font-semibold leading-5 text-gray-900"
          >
            <span
              ><LanguageIcon class="h-4 w-4 inline-grid" aria-hidden="true"
            /></span>
            <ChevronDownIcon class="h-4 w-4" aria-hidden="true" />
          </PopoverButton>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute left-1/2 z-10 mt-3 flex max-w-xs -translate-x-1/2"
            >
              <div
                class="w-full flex-auto overflow-hidden rounded-lg bg-white text-xs leading-5 shadow-lg ring-1 ring-gray-900/5"
              >
                <div class="p-2">
                  <div
                    v-for="language in languages"
                    :key="language.code"
                    class="group relative flex gap-x-2 rounded-lg p-2 hover:bg-gray-50 text-center"
                  >
                    <div>
                      <button
                        @click="changeLanguage(language.code)"
                        class="font-semibold text-gray-900"
                      >
                        {{ language.name }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-30" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">
            </span>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"> {{ title }}</span>
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link to="/Services" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >Services</router-link
        >


              <router-link 
                to="/about"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >About us</router-link
              >
              <router-link to="/contact" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >Contact</router-link
        >
            </div>
            <div class="py-6">
              <div
                    v-for="language in languages"
                    :key="language.code"
                    class="group relative flex gap-x-2 rounded-lg p-2 hover:bg-gray-50 text-center"
                  >

              <button
                @click="changeLanguage(language.code)"
                :key="language.code"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                <LanguageIcon class="h-6 w-6 inline-grid" aria-hidden="true" />
                {{language.name}}
              </button>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  LanguageIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

const products = [
  {
    name: "Insulation",
    description: "thermal insulation",
    href: "/services",
    icon: ChartPieIcon,
  },
  {
    name: "Coating",
    description: "floor coating",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
];
const callsToAction = [
  // { name: "Send email", href: "mailto:info@estehdath.com" },
  { name: "Contact sales", href: "tel:+966532688777", icon: PhoneIcon },
];
const langauge = [{ name: "عربي" }, { name: "English" }];

const mobileMenuOpen = ref(false);
</script>
