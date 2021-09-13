<template>
  <footer class="footer___bg h-full">
    <div class="container mx-auto px-8 ">
      <div class="w-full flex flex-col md:flex-row py-6 text-center">
        <LogoFooter />
      
      
      </div>
    </div>
  </footer>
</template>

<script>
import LogoFooter from "@/components/LogoFooter";
export default {
  name: "Footer",
  components: {
    LogoFooter,
  },
};
</script>	
<style  scoped>
.footer___bg {
  /* background-color: black; */
  color: white;
}
.blog-text {
  color: #66d4d7;
}
</style>
