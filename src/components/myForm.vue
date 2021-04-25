<template>
     <form @submit.prevent="handleSubmit"> 
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select v-model="breed" name="breed" defaultValue="shiba">
                <option value="shiba">Shiba</option>
                <option value="akita">Akita</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-dark">
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