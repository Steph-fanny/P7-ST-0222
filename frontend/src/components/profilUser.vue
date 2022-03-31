<template>
  <div class = "container-profil" >
   
   <div><p class="title">bonjour :{{ user.firstName}}</p></div>

     <section class="vh-100" style="background-color: #f4f5f7;"> 
      <!-- <div class="container py-5 h-100">  -->
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white" 
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem; background-color:#0d0764">
                
                <!--formulaire -->
                <form action= ""
                  id="form"
                  enctype="multipart/form-data"
                  @submit.prevent="updatePicture"
                  className ="upload-pic">

                  <img
                    src="../assets/photo-avatar-profil.png"
                    alt="photo de profil provisoire" id="avatar-profil"
                    class="img-fluid my-5"
                    style="width: 120px;"/>    

                  <label class="text-center label" for="file">       
                    Changer la photo de profil
                  </label>                                                              
                  <input
                    type="file" class="form-control" id="file" name="file"
                    accept="image/*" ref="image" 
                    @change="pictureToUpload"         
                  />




                    <div class="card-body mx-auto">
                      <button
                        type="submit"
                        class="form-control btn btn-primary btn-confirm"
                        name="pictureUpdate"
                        id="pictureUpdate"
                        @click.prevent="updatePicture"
                      > Confirmer
                      </button> 
                    </div>
                  </form>   
                                                                        
            </div>    

                         
                   
         
              <div v-bind="user" class="col-md-8" 
            >
              <div class="card-body p-4">
                <h6>Informations</h6>
                <hr class="mt-0 mb-4">

                <div class="row pt-1">
                  <div class="col-6 mb-3">                                        
                    <h6>Prénom</h6>
                    <p class="text-muted"> {{user.firstName }} </p>
                      </div>                  
                  <div class="col-6 mb-3">
                    <h6>Nom</h6>
                    <p class="text-muted"> {{user.lastName }}</p>
                  </div>
                </div>                
               
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted"> {{ user.email }} </p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Date d'inscription</h6>
                    <p class="text-muted">{{ user.createdAt }} </p>
                  </div>
                </div>

              <div>
                <!-- <div class ="btn" v-show ="user === admin"> 
                 si user = admin => affichage bouton supprime-->
                <button 
                    class= "form-control btn btn-danger"
                    v-bind= "user"
                    @click="deleteUser">
                    Supprimer le compte
                  </button> 
                </div>            
              </div>            
          </div>
          </div>
        </div>
      </div>   
  </div>
</section>
</div> 




</template>


<script >
// import { response } from "express";


export default {
  name: "profilUser",

  data(){   
    return {        
      user:{ 
        userId: localStorage.getItem("userId"),       
        firstName: " steph ",
        lastName: "",
        email: "" ,
        imageUrl: "", 
        creatAt:"",            
      },     
       
    }
  },

  mounted(){  
   
    const url = `http://localhost:3000/api/user/${ this.user.userId }`;
    console.log(this.user.userId)
    const options = {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
          }
      };

      fetch(url, options)      
       
        .then (function (response){
         response.json()
        })
                 
        .then(function(data) {      
          console.table(data)  
          // this.user.firstName = data.firstName; 
          // console.log(data.firstName)           
          // this.user.lastName = data.lastName;
          //  console.log(data.lastName)      
          // this.user.email = data.email;            
          // this.user.creatAt = data.creatAt;  
                  
        })  
        .catch(error => console.log(error))         
       
        
  },   

  methods: {


    filePictureToUpload() {
      this.image = this.$refs.image.files[0];
      this.imageUrl = URL.createObjectURL(this.image)
    },

  getOneUser() {
             
            let url = `http://localhost:3000/api/auth/${ this.user.userId }`;
            let options = {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }
            };
            fetch(url, options)
            .then (function (res){console.log(res)})
              //  .then(res => res.json())
                .then(function(data) {      
          console.table(data)  
          this.user.firstName = data.firstName; 
          console.log(data.firstName)           
          this.user.lastName = data.lastName;
           console.log(data.lastName)      
          this.user.email = data.email;            
          this.user.creatAt = data.creatAt;  
                  
        })  
                .catch(error => console.log(error))
        },
               
     
    
   


   

  deleteUser(){
        let url = "http://localhost:3000/api/user/${this.user.userId }"
              let option = {
                  method: "DELETE",
                  headers: {
                      'Authorization': 'Bearer ' + localStorage.getItem("token"),
                  }
              };
        fetch(url, option)
                  .then(function(response) {
                      console.log(response);
                      localStorage.clear();
                      alert("Compte supprimé !");
                  })
                  .then(this.$router.push("/"))
                  //retour page accueil
                  .catch(error => console.log(error))
      } 
   
} 
}





</script>

<style lang='css'>
.tittle{
  color:black;
}

.text-muted{
  color:#FD2D01 !important;
}
.container-profil{
  width: 100%;
  height:100%;  
}

#file{
  display: none;
}


#avatar-profil{
  height: 100%;
  border-radius:50%;
}

.btn-confirm{
  margin-top:0;
}

</style>