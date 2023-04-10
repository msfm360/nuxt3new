<template>
  <div class="mx-auto container px-6 xl:px-0 mt-12 shadow-2xl mb-10">
    <div
      class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 justify-end items-end"
    >
      <img
        src="https://images.unsplash.com/photo-1547895749-888a559fc2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
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
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl" dir="rtl">
            خدماتنا
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
    >
      <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block text-6xl text-center"> دهانات الحماية </span>
        </h2>
        <p class="text-2xl mt-4 text-gray-400 text-center">
          “استحداث تخصصت في تنفيذ مشاريع الدهانات الواقية من الصدآ و التآكل
          للآسطح الحديدية بمواصفات عالمية. تستخدم استحداث أفضل المواد و الدهانات
          و تتبع منهجية علمية في تنفيذ هذه المشاريع. تشمل خدمات استحداث مشاريع
          الحماية للمنشاءات النفطية و الغازية و الجسور و الآبراج و الهياكل
          المعدنية وغيرها
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0"></div>
      </div>
      <div class="flex items-center gap-8 p-8 lg:p-24">
        <img
          src="https://images.unsplash.com/photo-1647426994723-ab685e4b8c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1823&q=80"
          class="rounded-lg"
          alt="Tree"
        />
        <!-- <div>
          <img
            src="https://images.unsplash.com/photo-1647426994723-ab685e4b8c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1823&q=80"
            class="mb-8 rounded-lg"
            alt="Tree"
          />
          <img
            src="https://images.unsplash.com/photo-1647426994723-ab685e4b8c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1823&q=80"
            class="rounded-lg"
            alt="Tree"
          />
        </div> -->
      </div>
    </div>
    <div class="bg-slate-200 ">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
      >
        <!-- <div
          class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 shadow-lg"
        > -->
          <img
            src="https://www.ippmagazine.com/wp-content/uploads/2021/03/shutterstock_583365046-1024x717.jpg"
            alt="."
            class="rounded-lg bg-gray-100 w-[38rem] h-[26rem]"
          />
        <div>
            <div dir="rtl">
          <h2
            class="text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center"
          >
            الدهانات المقاومة للحريق
          </h2>
          <p class="mt-4 text-gray-600 text-2xl ">
            تقوم استحداث بتنفيذ مشاريع دهانات الحماية من الحريق للهياكل الحديدية
            وفق اشتراطات الدفاع المدني و كود البناء السعودي عبر استخدام احدث
            المعدات و امهر الفنيين و معرفة تقنية عالية بالمجال ، للمنشآت
            الصناعية و التجارية و الأهلية كالمصانع و الأبراج الحديدية و المطارات
            و المستودعات ....الخ
          </p>
        </div>
          <!-- <dl
            class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
          >
            <div
              v-for="feature in features"
              :key="feature.name"
              class="border-t border-gray-200 pt-4"
            >
              <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-2 text-sm text-gray-500">
                {{ feature.description }}
              </dd>
            </div>
          </dl> -->
        </div>
      </div>
    </div>
    <div
      class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center"
    >
      <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20" dir="rtl">
        <h2 class="font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block text-6xl text-center"> دهانات الآرضيات </span>
        </h2>
        <p class="text-2xl mt-4 text-gray-600 text-center ">
          تقوم استحداث بتنفيذ مشاريع دهانات الارضيات للمصانع كمصانع الأغذية و
          مواقف السيارات و المختبرات و المطارات عبر استخدام احدث الأدوات و
          التقنيات في تنفيذ هذه المشاريع
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0"></div>
      </div>
      <div class="flex items-center gap-8 p-8 lg:p-24">
        <img
          src="../assets/img2.jpg"
          class=" rounded-lg items-center justify-center "
          alt="Tree"
        />
        <!-- <div>
          <img
            src="https://th.bing.com/th/id/OIG.vkwKMS9KYvljpSOF_zLi?pid=ImgGn"
            class="mb-8 rounded-lg"
            alt="Tree"
          />
          <img
            src="https://th.bing.com/th/id/OIG.vkwKMS9KYvljpSOF_zLi?pid=ImgGn"
            class="rounded-lg"
            alt="Tree"
          />
        </div> -->
      </div>
    </div>
    <!--  -->
    <div class="bg-slate-200">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
      >
        <img
          src="https://www.ippmagazine.com/wp-content/uploads/2021/03/shutterstock_583365046-1024x717.jpg"
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          class="rounded-lg bg-gray-100 w-[38rem] h-[26rem]"
        />

        <div>
            <div dir="rtl">
          <h2
            class="text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center"
          >
            الدهانات المقاومة للحريق
          </h2>
          <p class="mt-4 text-gray-500 text-2xl"  >
            تقوم استحداث بتنفيذ مشاريع دهانات الحماية من الحريق للهياكل الحديدية
            وفق اشتراطات الدفاع المدني و كود البناء السعودي عبر استخدام احدث
            المعدات و امهر الفنيين و معرفة تقنية عالية بالمجال ، للمنشآت
            الصناعية و التجارية و الأهلية كالمصانع و الأبراج الحديدية و المطارات
            و المستودعات ....الخ
          </p>
        </div>
          <!-- <dl
            class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
          >
            <div
              v-for="feature in features"
              :key="feature.name"
              class="border-t border-gray-200 pt-4"
            >
              <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-2 text-sm text-gray-500">
                {{ feature.description }}
              </dd>
            </div>
          </dl> -->
        </div>
      </div>
    </div>
    
    <div
      class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg
          class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <h1
                class="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl" dir="rtl"
              >
                دهانات الحماية للهياكل الخرسانية
              </h1>
              <p class="mt-6 text-2xl leading-8 text-gray-700" dir="rtl">
                استحداث تخصصت في تنفيذ مشاريع الدهانات الواقية من الصدآ و التآكل
                للآسطح الحديدية بمواصفات عالمية. تستخدم استحداث أفضل المواد و
                الدهانات و تتبع منهجية علمية في تنفيذ هذه المشاريع. تشمل خدمات
                استحداث مشاريع الحماية للمنشاءات النفطية و الغازية و الجسور و
                الآبراج و الهياكل المعدنية وغيرها.
              </p>
            </div>
          </div>
        </div>
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <img
            class=" w-[38rem] max-w-none rounded-xl bg-gray-900 shadow-xl  ring-gray-400/10 sm:w-[57rem]"
            src="https://www.ippmagazine.com/wp-content/uploads/2021/03/shutterstock_583365046-1024x717.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <!-- ok -->
    <div
      class="relative isolate overflow-hidden "
      dir="rtl"
    >
    </div>

  </div>
</template>

<script>
export default {
  name: "component",
  data() {
    return {
      features: [
        { name: "Origin", description: "Designed by Good Goods, Inc." },
        {
          name: "Material",
          description:
            "Solid walnut base with rare earth magnets and powder coated steel card cover",
        },
        { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
        {
          name: "Finish",
          description: "Hand sanded and finished with natural oil",
        },
        { name: "Includes", description: "Wood card tray and 3 refill packs" },
        {
          name: "Considerations",
          description:
            "Made from natural materials. Grain and color vary with each item.",
        },
      ],
    };
  },
};
</script>

<style></style>
