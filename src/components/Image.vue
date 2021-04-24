<template>
      <div className="card">
      <div className="card-image">
        <figure className="image">
          <img :src="src" alt="cute dog!" />
        </figure>
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