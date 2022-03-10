<template>
 
  <div class="container" id="content">
    <div> <navHome/></div>    
    <h1 class="homeTittle">Bienvenue dans le reseau social Groupomania</h1>
<div class = link>

  <router-link 
  to="/signup"
  class="a connectionLink"  
  >S'inscrire</router-link> |
  
  <router-link 
  to="/login"
  class="a inscriptionLink" 
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


a {
  font-weight: bold;
  text-align: center;
  color: #c02c1162;
  font-size: 25px;  
}

.link {
text-align: center;
margin-top: 100px;
}

.homeTittle{
   text-align: center;
   font-size : 35px;
   color : #4d4a48;
   margin-top : 35px;
}



</style>
