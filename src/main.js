import Vue from 'vue'
import App from './App.vue'
//import router from './router'
//import axios from 'axios' //追記
//import VueAxios from 'vue-axios' //追記


Vue.config.productionTip = false
//Vue.use(VueAxios, axios) //追記

new Vue({
  //router,
  //? store,
  render: h => h(App),
}).$mount('#app')

/*
new Vue({
  el: '#app',
  data: {
    pic: null,   
  },
  mounted: function(){
    axios.get('https://dog.ceo/api/breeds/image/random/12')
    .then(function(response){
      this.pic = response.data.message
      console.log(this.pic)
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
  },
  render: h => h(App),
})*/
