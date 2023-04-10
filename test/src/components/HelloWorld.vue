<template>
  <!-- switcher for language -->
  <!-- <div>
    <button v-on:click="changeLanguage">Change Langauge</button>
  </div>
  <div>
    {{ thePost }}
  </div> -->

  {{ $store.state.count }}
</template>

<script>
export default {
  name: 'MyComponent',
//   data() {
//     return {
//       currentLanguage: 'en' // set default language to English
//     }
//   },
//   methods: {
//     async changeLanguage() {
//       // toggle between languages
//       if (this.currentLanguage === 'en') {
//         this.currentLanguage = 'ar' // switch to arabic
//       } else {
//         this.currentLanguage = 'en' // switch to English
//       }
      
//       // call API with new language
//       const response = await fetch(`https://strapi-bbid.onrender.com/api/enwan-almwqes?locale=${this.currentLanguage}`)
//       const data = await response.json()
//       console.log(data)
//     }
//   }
}

</script>
