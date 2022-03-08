<template>
 
 <div class ="container-signup">
  
  
    <section class="vh-100 bg-image" style="background-color:  #706e6e;">
    
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
               <div><navHome/></div> 
              <h2 class="text-uppercase text-center mb-5">Créer votre compte</h2>

              <form>
               
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example1cg">Prénom</label>
                  <input v-model= "firstName"
                  type="text" 
                  id="firstName" class="form-control form-control-lg"
                  placeholder="Votre prénom" required/>                  
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example1cg">Nom</label>
                  <input v-model= "lastName"
                  type="text" 
                  id="lastName" class="form-control form-control-lg"
                  placeholder="Votre nom" required/>                  
                </div>


                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3cg">Email</label>
                  <input v-model= "email"
                  type="email" 
                  id="form3Example3cg" class="form-control form-control-lg" 
                  placeholder="Votre adresse email valide" required/>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4cg">Mot de passe</label>
                  <input v-model= "password"
                  type="password" id="form3Example4cg" class="form-control form-control-lg" 
                  placeholder="min 6 : dont 1 maj, 1 minuscule, 2 chiffres" required/>
                  
                </div>
                            

                <div class="d-flex justify-content-center">
                  <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                  S'enregistrer</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0"> Vous avez déja un compte ? 
                <router-link to = "/login">Connectez vous !</router-link></p> 
                 

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>














    
  <nav class= "navlogsign"><p>Vous avez déja un compte ? 
  <router-link to="/login">Connectez vous !</router-link></p></nav>  
         
</div>     




                       
</template>

<script>
import navHome from '@/components/navHome.vue'

export default {
  name: "signupUser",  
  components: {
  navHome 
  }
}
</script>

<style>

</style>
