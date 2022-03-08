<template> 
  <div class= "container-login">     
   
<section class="vh-100" style="background-color: #706e6e;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                class="img-fluid" style="border-radius: 1rem 0 0 1rem;"
              />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                    <span class="h1 fw-bold mb-0"><navHome/></span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Votre compte</h5>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example17">Email</label>
                    <input v-model= "dataLogin.email"
                    type="email" 
                    id="email" 
                    class="form-control form-control-lg"
                    placeholder="email@exemple.com" required>                     
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example27">Mot de passe</label>
                    <input v-model= "dataLogin.password"
                    type="password" 
                    id="password" 
                    class="form-control form-control-lg" 
                    placeholder=" votre mot de passe" required>
                    
                  </div>

                  <div class="pt-1 mb-4">
                    <button @click.prevent="loginAccount"
                    class="btn btn-dark btn-lg btn-block" type="button">Se connecter</button>
                  </div>

                  <!-- <a class="small text-muted" href="#!">Forgot password?</a> -->
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Vous n'avez pas de compte ?<br>
                  <router-link to = "/signup">Rejoignez-nous !</router-link></p>
                      
                  
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</section>

       <div><footerApp/></div> 
  </div>                 
                           
       
</template>



<script>
import navHome from '@/components/navHome.vue'
import footerApp from '@/components/footerApp.vue'


export default {
  name: 'loginUser',  
  components: {
  navHome,
  footerApp,
  },

  data(){
    return{
      dataLogin:{
        email:"",
        password:"",
      },    
    };
  },
  methods:{
    loginAccount(){
      let loginData ={
        "email": this.dataLogin.email,
        "password": this.dataLogin.password
      }
      console.log(loginData)
      let urlLogin = "http//localhost:3000/api/auth/login"
      let option ={
        method : "POST",
        body :JSON.stringify(loginData),
        headers : {
          "content-type" : 'application/json'
        }
      }
      fetch(urlLogin, option)
      .then(res => res.json())
        .then((res) => {
          if (res.userId && res.token) {
            localStorage.setItem("userId", res.userId)
            localStorage.setItem("token", res.token)
            localStorage.setItem("isAdmin", res.isAdmin);
            console.log(localStorage)
            this.$router.push("message");
            alert(" Vous etes connecté !");
          } else {
            alert(" Mot de passe incorrect ! ");
            }
        })
        .catch(error => console.log(error))
    }
  }
}
             
</script>

<style lang= "css">
.container-login{ 
  height:100%;
 
}

.login-tittle{
margin: 1rem;
  text-align: center;
  font-size: 2rem;
  color :rgb(87, 87, 104); 
}
form-login {
  max-width: 100rem;
  margin: auto;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px black;
  background-color: #122441;  
}
.mx-auto{
   border : 1px #706e6e solid;
   border-radius: 5px;
   height : 300px;
}

 .btn-primary {
     
    background-color: #8b0000 ;
    border-color: rgb(138, 0, 0);
 }

.btn {
  background-color: #8b0000 ;
  border-color: #8b0000;
  text-align: center;
  margin-top: 40px;
}

.form-group{
  margin-top:15px;
}
 
 .btn:hover {
    border-color: #006400;
    background-color: #006400;
 }

.inscription{
  text-align: center;
}

a{

  color : #862626;
  text-decoration: none;
  font-size: 20px;
  text-align: center;
}

  nav {
    margin-top:15px;
    text-align: center;
  }


</style>
