<!-- <template>
    <Headers  />
  <Hero  />
  <About />
  <Logo />
  <Feature />
  <Team />
  <Contact />
  <Footer />
  
</template>

<script>
// import DarkM from "./components/DarkM.vue";
import Headers from "./components/Headers.vue";
import Logo from "./components/Logo.vue";
import About from "./components/About.vue";
import Hero from "./components/Hero.vue";
import Feature from "./components/Feature.vue";
import Contact from "./components/Contact.vue";
import Team from "./components/Team.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Hero,
    Headers,
    // DarkM,
    Feature,
    About,
    Logo,
    Contact,
    Team,
    Footer,
  },
  methods: {
  },
};

</script>
<style>
html.dark {
  color-scheme: dark;
}
</style> -->

<template lang="">
  <div>
    <Headers />
    <router-view></router-view>
    <Footer />
  </div>
  <!-- router link to home -->
</template>
<script>
import Headers from "./components/Headers.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Headers,
    Footer,
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpgradeUI = true;
      });
    }
  },

  methods: {
    async accept() {
      this.showUpgradeUI = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    },
  },
};
</script>
