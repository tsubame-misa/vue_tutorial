<template>
      <div className="columns is-vcentered is-multiline">
      <div className="column is-3">
    <div v-if="urls===null">
        <myLoading/>
    </div>
   <div v-else>
       <div v-for="u in urls" :key="u" > <myImage  v-bind:src="u"/> </div>
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
  data(){
      return{
          img_src:"https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
        }
    }
}
</script>