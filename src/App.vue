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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
