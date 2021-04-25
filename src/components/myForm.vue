<template>
     <form @submit.prevent="handleSubmit"> 
        <div class="field has-addons">
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select v-model="breed" name="breed" defaultValue="shiba">
                <option value="shiba">Shiba</option>
                <option value="akita">Akita</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button type="submit" class="button is-dark">
              Reload
            </button>
          </div>
        </div>
      </form>
</template>



<script>
export default {
  name: 'myForm',
  data(){
    return{
      breed: "shiba",
    }
  }, 
  methods:{
    handleSubmit(){
    console.log(this.breed);
    this.$emit('parentMethod', this.breed)
   }
 }
}
</script>