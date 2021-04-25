<template>
    <div class="columns is-gapless is-multiline">
    <div v-if="urls===null">
        <myLoading/>
    </div>
   <div v-else>
      <!--<div className="columns is-vcentered is-multiline">
         <div v-for="u, in urls" :key="u" > 
           <myImage  v-bind:src="u" class="column is-3"/>
         </div>
      </div>-->
       <div v-for="(u,i) in 3" :key="u" class="columns is-vcentered  is-multiline" > 
         <myImage  v-bind:src="urls[i*3]" class="column is-3"/>
         <myImage  v-bind:src="urls[i*3+1]" class="column is-3"/>
         <myImage  v-bind:src="urls[i*3+2]" class="column is-3"/> 
         <myImage  v-bind:src="urls[i*3+3]" class="column is-3"/> 
       
       </div>
    </div>
    </div>
</template>


<script>
import myImage from "./Image.vue";
import myLoading from "./Loading.vue";

export default {
  name: 'Gallery',
  components:{
      myImage,
      myLoading,
  },
  props: {
    urls: {
      type: Array,
    }
  },
  /*
  data(){
      return{
          img_src:"https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
        }
    }*/
}
</script>