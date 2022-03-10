<template>
 
  <div class="container" id="content">
    <div> <navHome/></div>    
    <h1 class="homeTittle">Bienvenue dans le reseau social Groupomania</h1>
<div class = link>

  <router-link 
  to="/signup"
  class="home-pagelink"  
  >S'inscrire</router-link> |
  
  <router-link 
  to="/login"
  class="home-pagelink" 
  >Se connecter</router-link>  
</div>

  </div>
</template>

<script>
import navHome from '@/components/navHome.vue'



export default {
  name: 'homePage',  
  components: {
  navHome 
  }
}

</script>

<style>


.link {
  font-weight: bold;
  text-align: center;
  color: #f1670b;
  font-size: 35px;  
  text-align: center;
  margin-top: 100px;
}



.homeTittle{
   text-align: center;
   font-size : 35px;
   color : #0d0764;
   margin-top : 35px;
}



</style>
