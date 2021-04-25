<template>
    <div class="columns is-gapless is-multiline">
    <div v-if="urls===null">
        <myLoading/>
    </div>
   <div v-else>
       <div v-for="(u,i) in 4" :key="u" class="columns is-gapless is-multiline" > 
         <myImage  v-bind:src="urls[i*3]" class="column is-one-third"/>
         <myImage  v-bind:src="urls[i*3+1]" class="column is-one-third"/>
         <myImage  v-bind:src="urls[i*3+2]" class="column is-one-third"/> 
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