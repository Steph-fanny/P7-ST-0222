// page inscription

<template>
   <section class="vh-100 gradient-custom">
      <div><headerLogo/></div>
      <h1 class= "welcome">Bienvenue sur Groupomania</h1>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase">Inscription</h2>    

                //***prenom
                <div class="form-outline form-white mb-4">
                    <input 
                    class="form-control form-control-lg" 
                    type="text" 
                    placeholder="Votre prenom"
                    id="firstName" 
                    required                 
                    aria-label="Entrez votre prenom"
                    v-model="firstName"  
                    />            
                </div>
                
                //***nomm
                <div class="form-outline form-white mb-4">
                    <input 
                    class="form-control form-control-lg" 
                    type="text" 
                    placeholder="Votre nom"
                    id="lastName" 
                    required                 
                    aria-label="Entrez votre nom"
                    v-model="lastName"  
                    />            
                </div>

            // *** email
                <div class="form-outline form-white mb-4">
                    <input 
                    class="form-control form-control-lg" 
                    type="email" 
                    placeholder="Votre email"
                    id="Email" 
                    required
                    pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
                    maxlength="40"
                    aria-label="Entrez votre email"
                    v-model="email"  
                    />            
                </div>

                // mot de passe : 1 min, 1 maj min 8 caracteres
                <div class="form-outline form-white mb-4">
                    <input 
                    class="form-control form-control-lg"
                    type="password" 
                    placeholder="votre mot de passe"
                    id="password" 
                    required,                                     
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                    v-model="password"
                    />

                //bouton de Connexion : au click fonction envoie des données (v-on=@)
                </div>
                <button               
                @:click ="sendData"
                class="btn btn-outline-light btn-lg px-5" 
                type="submit">
                Se connecter</button>             
                </div>

            <div>
              <p class="mb-0">Vous avez déja un compte ? 
               <router-link to ="/login"
                class="text-white-50 fw-bold">
                "Se connecter"</router-link> 
                </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
</template>

<script>
import headerLogo from "../components/headerLogo.vue";



export default {
name : "signupUser",
components : {
    headerLogo,
},
data(){
    return{         
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }
}

</script>

<style>

</style>