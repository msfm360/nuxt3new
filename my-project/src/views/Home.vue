<template>
  <Hero  />
  <About />
  <Logo />
  <Feature />
  <Team />
  <Contact />
  
</template>

<script>
// import DarkM from "./components/DarkM.vue";
import Logo from "../components/Logo.vue";
import About from "../components/About.vue";
import Hero from "../components/Hero.vue";
import Feature from "../components/Feature.vue";
import Contact from "../components/Contact.vue";
import Team from "../components/Team.vue";

export default {
  name: "Home",
  components: {
    Hero,
    // DarkM,
    Feature,
    About,
    Logo,
    Contact,
    Team,
  },
  methods: {
  },
};

</script>
<style>
html.dark {
  color-scheme: dark;
}
</style>

