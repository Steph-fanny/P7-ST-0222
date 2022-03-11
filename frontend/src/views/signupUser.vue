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
              <h2 class=" signup-subtitle text-uppercase text-center mb-5">Créer votre compte</h2>

              <form v-on:submit.prevent="signupAccount()" method ="post" >
               
                <div class="form-outline mb-4">
                  <label class="form-label signup-title" for="form3Example1cg">Prénom</label>
                  <input v-model= " inputSignup.firstName"
                  type="text" 
                  id="firstName" class="form-control form-control-lg"
                  placeholder="Votre prénom" required/>                  
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label signup-title" for="form3Example1cg">Nom</label>
                  <input v-model= " inputSignup.lastName"
                  type="text" 
                  id="lastName" class="form-control form-control-lg"
                  placeholder="Votre nom" required/>                  
                </div>


                <div class="form-outline mb-4">
                  <label class="form-label signup-title" for="form3Example3cg">Email</label>
                  <input v-model= " inputSignup.email"
                  type="email" 
                  id="form3Example3cg" class="form-control form-control-lg" 
                  placeholder="Votre adresse email valide" required
                  pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"/>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label signup-title" for="form3Example4cg">Mot de passe</label>
                  <input v-model= " inputSignup.password"
                  type="password" id="form3Example4cg" class="form-control form-control-lg" 
                  placeholder="Votre mot de passe*" required
                  pattern = " ^(?=.{5,}$)(?=(?:.*?[A-Z]){1})(?=.*?[a-z])(?=(?:.*?[0-9]){2}).*$"/>
                  <p>*Minimum 5 caractéres dont 1 Majuscule, 1 minuscule, 2 chiffres</p>
                </div>
                            

                <div class="d-flex justify-content-center">
                  <button 
                    @click.prevent = "signupAccount()"
                    type="button" 
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                    S'enregistrer
                  </button>
                </div>

                <p class="text-center text-muted mt-5 mb-0"> Vous avez déja un compte ? 
                <router-link to = "/login"
                class="signup-title"
                >Connectez vous !</router-link></p>                  

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   
 
         
</div>     
                       
</template>


<script>
import navHome from '@/components/navHome.vue'

export default {
  name: "signupUser",  
  components: {
  navHome 
  },

data(){
    return{
      inputSignup:{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },    
    };
  },
  methods:{
    signupAccount(){
      let inputDatas ={
        "firstName": this.inputSignup.firstName,
        "lastName" : this.inputSignup.lastName,
        "email": this.inputSignup.email,
        "password": this.inputSignup.password
      }
      console.log(inputDatas)
      let urlSignup = "http//localhost:8080/api/user/signup"
      let option = {
        method : "POST",
        body :JSON.stringify(inputDatas),
        headers : {
          "content-type" : 'application/json'
        }
      }
      console.log(option)
            fetch(urlSignup, option)
                .then(res => res.json())
                .then((res) => {                   
                    localStorage.setItem("userId", res.userId);
                    localStorage.setItem("token", res.token);
                    console.log(localStorage)
                    this.$router.push("homePost");
                    alert(" Bienvenue sur Groupomania");
                    
                })
                .catch(error => console.log(error))
        }
    }
}
  
</script>

<style>
.container-signup{
  width: 100%;
  height: 100%;
}

.signup-subtitle{
  color :#0d0764
}

.btn-block{
  background-color: #0d0764 !important; 
}
.signup-title{
color: #FD2D01!important ;
text-decoration: none !important;
font-weight: 600;
}


</style>
