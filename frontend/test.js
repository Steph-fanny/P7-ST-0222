<!--
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
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






<!-- <p class="login-tittle">Votre compte</p> 

    <div class=" mx-auto" style="width: 350px">
      <form class="form-login ">
        <div class="form-group ">
          <label for="email">Email: </label>
          <input v-model= "dataLogin.email"
          type="email" 
          class="form-control" 
          id="email" 
          placeholder="email@example.com" required>
        </div>

        <div class="form-group ">
          <label for="Password">Password</label>
          <input 
          v-model= "dataLogin.password"
          type="password" 
          class="form-control" 
          id="Password" 
          placeholder="Password" required>
      </div>
      
      <button 
      @click.prevent="loginAccount"
      type="submit" 
      class="btn btn-primary" 
      style="width: 250px">Se connecter</button>
      </form>
      <div class="inscription"></div>
        <nav class="navlogsign">Vous n'avez pas de compte ?<br>
        <router-link to = "/signup">Rejoignez-nous !</router-link></nav> 