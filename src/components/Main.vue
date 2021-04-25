<template>
      <main>
       <section class="section">
        <div class="container">
          <myForm @parentMethod="updateBreed"/>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <Gallery v-bind:urls="this.pic"/>
        </div>
      </section>
    </main>
</template>


<script>
import Vue from 'vue'
import axios from 'axios' 
import VueAxios from 'vue-axios' 
import Gallery from "./Gallery.vue";
import myForm from "./myForm.vue";

Vue.config.productionTip = false
Vue.use(VueAxios, axios) 


export default {
  name: 'myMain',
  components:{
      Gallery,
      myForm,
    },
  data(){
    return{
      pic: null, 
      breed: "shiba",  
    }
  }, 
  methods: {
    updateBreed (breed) {
      this.breed = breed
      axios.get(`https://dog.ceo/api/breed/${this.breed}/images/random/12`)
    .then(function(response){
      this.pic = response.data.message
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
    }
  },
  mounted: function(){
    //上と同じだから関数にしたい
    axios.get(`https://dog.ceo/api/breed/${this.breed}/images/random/12`)
    .then(function(response){
      this.pic = response.data.message
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
  },
}
</script>

<style>

</style>