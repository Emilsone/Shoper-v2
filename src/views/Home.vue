<template>
  <main>
    <TheHeader />
    <hero />
    
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import Hero from "@/components/Hero.vue";

import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    Hero,
   
    TheFooter,
  },
};
</script>
<style scoped>
</style>

