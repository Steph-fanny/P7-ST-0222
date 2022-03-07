<template> 
     <div> <navHome/></div> 
        <div class="blocsignup">
           
            <h2>page login </h2>
            <form v-on:submit.prevent="login" id="form-login" >
              <div class="form-group">
                <label for="email">E-mail :</label>
                <input type="email" id="email" name="email" class="form-control" required v-model="inputLogin.email"/>
              </div>
              <div class="form-group">
                <label for="password">Mot de passe :</label>
                <input type="password" id="password" name="password" class="form-control" required v-model="inputLogin.password"/>
              </div>   
              <button type="submit">Connect</button>                                     
            </form> 
              
             <nav class="navlogsign"><p>Pas encore inscrit ? <router-link to="/signup/auth">Rejoignez-nous !</router-link></p></nav>
        </div>  
</template>


<script>
import navHome from '@/components/navHome.vue'

export default {
  name: 'loginUser',  
  components: {
  navHome 
  }
}


          
</script>

<style>

</style>
