<template>
  <main>
    <TheHeader />
    <ShopList />
    
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import ShopList from "@/components/ShopList.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
components: {
  TheHeader,
  ShopList,
  TheFooter,
},
};
</script>
<style scoped>
</style>

