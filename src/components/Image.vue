<template>
   <div v-if="src!==null&&src!==undefind">
      <div class="card">
        <div class="card-image">
           <figure class="image">
          <img :src="src" alt="cute dog!" />
        </figure>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'myImage',
  props: {
    src: {
      type: String,
    }
  }
}
</script>