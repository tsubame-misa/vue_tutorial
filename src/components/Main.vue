<template>
      <main>
      <section className="section">
        <div className="container">
          <Gallery v-bind:urls="img_urls"/>
        </div>
      </section>
    </main>
</template>


<script>
import Gallery from "./Gallery.vue";
export default {
  name: 'myMain',
  components:{
      Gallery,
    },
  data(){
    return{
      img_urls : [
  "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-17.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-4.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-7.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
]
      }
   }
}
</script>