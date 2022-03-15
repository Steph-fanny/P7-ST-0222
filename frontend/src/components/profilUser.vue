<template>
<div class = "container-profil">
  <section class="vh-100" style="background-color: #f4f5f7;"> 
  <!-- <div class="container py-5 h-100">  -->
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white" 
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem; background-color:#0d0764">
                <div class ="profile-user">  
                  <form action="" on submit={handlePicture} className="upload-pic">           
                <img
                    src="../assets/photo-avatar-profil.png"
                    alt="Avatar" id="avatar-profil"
                    class="img-fluid my-5"
                    style="width: 120px;"/>                 

                    <input
                    type="file" class="form-control" id="file" name="imageUrl"
                    accept="image/*" ref="image" 
                              
                    />

                    <label class="text-center label" for="file"
                       id="uploadBtn"                                            
                      >Changer la photo de profil                                        
                    </label>   

                    <div class="card-body mx-auto">
                      <button
                        type="submit"
                        class="form-control btn btn-primary"
                        name="pictueUpdate"
                        id="pictureUpdate"
                        @click.prevent="updatePicture()"
                      > Confirmer
                      </button>  
                    </form>  
                  </div>  
                </div>                                            
            </div>    

         
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Informations</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                     
                    <h6>Prénom</h6>
                    <p class="text-muted">{{ userAccount.firstName }}</p>
                      </div>
                  
                  <div class="col-6 mb-3">
                    <h6>Nom</h6>
                    <p class="text-muted">{{ userAccount.lastName }}</p>
                  </div>
                </div>                
               
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{{ userAccount.email}}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Date d'inscription</h6>
                    <p class="text-muted">{{ userAccount.createdAt}} </p>
                  </div>
                </div>
                <button
                    class= "form-control btn btn-danger"
                    v-bind= "user"
                    @click="deleteUser()">
                    Supprimer le compte
                  </button>             
              </div>

            
            </div>
          </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</section>
</div> 
</template>



<script>
export default {
  name: 'profilUser',

  data(){
    return {
      userAccount: {
        id: localStorage.getItem("userId"),       
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "",
        createdAt:"",
      },
      inputAccount:{
      firstName: "",
      lastName: ""
      }
    }
  },
// mounted() {
//   let url = `http://localhost:3000/api/user/${ this.userAccount.userId }`;
//   let options = {    
//     method: "GET",
//     headers: {
//       'Authorization': 'Bearer ' + localStorage.getItem("token"),
//     }
//   };
//     fetch(url, options)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         this.userAccount.firstname = data.firstname;
//         this.userAccount.lastname = data.lastname;
//         this.userAccount.email = data.email; 
//         this.userAccount.createdAt = data.createdAt;                                
//       })
//       .catch(error => console.log(error))
//     },


 methods: {
  
    // const uploadImg = () =>{
    //   const handlePicture =(e)=>{
    //     e.preventDefault();
    //   }
    //   return(
        
    //   )
    // }
    // pictureToUpload() {
    // // const imgDiv = document.querySelector ('.profile-user');
    // const img = document.querySelector ('#avatar-profil');
    // const file = document.querySelector ('#file');
    
    // // const uploadBtn = document.querySelector ('#uploadBtn');

    // updatePicture(){   
    //   file.addEventListener('change', function(){
    //     const choosedFile = this.file[0];
    //     if(choosedFile) {
    //       const reader = new FileReader ();
    //       reader.addEventListener('load', function(){
    //         img.setAttribute('src', reader.result);
    //       });
    //       reader.readAsDataURL(choosedFile);
    //     }
    //   })
    //   },
    // },
  


  getOneUser() {
    let url = `http://localhost:3000/api/user/${ this.userAccount.userId }`;
    let options = {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      }
    };
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.userAccount.firstname = data.firstname;
        this.userAccount.lastname = data.lastname;
        this.userAccount.email = data.email;
      })
      .catch(error => console.log(error))
  },


    deleteUser() {
      let url = `http://localhost:3000/api/user/${ this.userAccount.userId }`;
            let options = {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }
            };
            fetch(url, options)
                .then((response) => {
                    console.log(response);
                    localStorage.clear();
                    alert("Compte supprimé !");
                })
                .then(this.$router.push("/"))
                //retour page accueil
                .catch(error => console.log(error))
    }, 
  },
 }
 
</script>




<style lang='css'>

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

</style>
