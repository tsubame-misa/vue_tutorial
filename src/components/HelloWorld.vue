<template>
<div>
      <main>
        <section>
          <figure>
            <img
              src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
              alt="cute dog"
            />
          </figure>
        </section>
      </main>
     
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
