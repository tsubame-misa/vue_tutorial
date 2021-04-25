<template>
  <div id="app">
     <myHeader/>
    <myMain/>
    <myFooter/>
  </div>
</template>

<script>
import myHeader from "./components/Header.vue";
import myFooter from "./components/Footer.vue";
import myMain from "./components/Main.vue";

export default {
  name: 'App',
  components: {
    myHeader,
    myFooter,
    myMain
  },    
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
</style>
