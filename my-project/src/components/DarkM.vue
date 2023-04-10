
<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div>
    <!-- create button for toggle with class from tailwind-->
    <p>is Dark : {{ isDark }}</p>

    <button
      @click="toggleDark()"
      class="bg-gray-200 dark:bg-gray-700 rounded-full p-2 focus:outline-none"
    >
      Toggle
    </button>
  </div>
</template>

