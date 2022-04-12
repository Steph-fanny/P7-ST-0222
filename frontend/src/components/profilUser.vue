<template>
  <div class = "container-profil" >
   
   <div><p class="title">Bonjour :{{ user.firstName}}</p></div>

     <section class="vh-100" style="background-color: #f4f5f7;"> 
      <!-- <div class="container py-5 h-100">  -->
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white" 
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem; background-color:#0d0764">
                
                <!--formulaire -->
                <form action= "" method="POST"
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
                    type="file" class="form-control" id="file" name="image"
                    accept="image/*" ref="image" 
                    @change="onFileSelected"         
                  />                    
                  <div class="card-body mx-auto">
                      <button
                        type="submit"
                        class="form-control btn btn-primary btn-confirm"
                        name="pictureUpdate"
                        id="pictureUpdate"
                        @click="updatePicture"
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
      id: localStorage.getItem("userId"),       
      firstName: " steph ",
      lastName: "",
      email: "" ,
      imageUrl: "", 
      image:"",
      creatAt: "",                    
    },  
      image:"",  
    }   
    
  },

 

  mounted (){    
    const url = `http://localhost:3000/api/user/${ this.user.id }`;
    console.log(this.user.id)
    const options = {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
          }
      };

    //  const response = await fetch(url, options);
    //  const data = await response.json();

    // console.log(data)
    // console.table(data);
        
     
     fetch(url, options)      
        .then (function (response){   
           return response.json()           
        })
                        
        .then(function(data) {   
          console.table(data) 
          console.log(data)

          // this.user.firstName = data.user.firstName;
          // console.log(data.user.firstName)
          this.user.lastName = data.user.lastName;
          console.log(data.user.lastName)
          // this.user.email = data.user.email;
          // console.log(data.user.email);
          // this.user.creatAt = data.user.createdAt;
          // console.log(data.user.creatAt);


        // "user.lastName": data.user.lastName,
        // "email": data.user.email,
        // "createdAt": data.user.createdAt,
        })
        .catch(error => console.log(error))  
      },                 
       
                
     
           
  methods: {
    getOneUser() {             
      let url = `http://localhost:3000/api/user/${this.user.id }`;
      let options = {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
      };

      fetch(url, options)
        .then (function (response){
         return response.json()
        })
        .then(function(data) {   
          console.table(data)       
          this.user.firstName = data.user.firstName; 
            console.log(data.user.firstName)           
          this.user.lastName = data.user.lastName;
           console.log(data.user.lastName)      
          this.user.email = data.user.email;            
          this.user.creatAt = data.user.creatAt;  
                  
        })  
                .catch(error => console.log(error))
        },

    
    onFileSelected (event) {   
      console.log(event)  
      // image a uploader
      this.image = event.target.files[0];
      this.imageUrl = URL.createObjectURL(this.image)
    },

    async updatePicture() {
      //créer element à envoyer au server et ajouter le fichier choisi à formData
      const fd = new FormData();           
      // fd.append("userId, this.user.userId");
      fd.append("image", this.image, this.image.name);
      // fd.append("imageUrl", this.imageUrl);
      console.log(this.image);
   
   
      let updateProfile = {   
                "userId" : this.userId,              
                "image" : this.imageUrl,        
                               
            }      
            console.log(updateProfile)  



      let url = `http://localhost:3000/api/user/${this.user.id }`;
      let options = {
          method: "PUT",
           body: JSON.stringify(updateProfile),
          headers: {           
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
          } 
          }
        
      fetch(url, options)
      .then (function (response){        
          return console.log(response.json())
        })
        .then(function(data) {  
                 
          this.image= data.user.imageUrl
          console.log(data.user)
          alert('The file has been uploaded successfully.')
        })
    },  

                 
     
      deleteUser(){
        let url = "http://localhost:3000/api/user/${this.user.id }"
        console.log(this.user.id)
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
          //retour page accueil
          .then(this.$router.push("/"))            
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