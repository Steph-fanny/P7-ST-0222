<template>
<div class = "container-profil" >
  <div>
  <p class="title">bonjour :{{ user.firstName}}</p> </div>
  <section class="vh-100" style="background-color: #f4f5f7;"> 
  <!-- <div class="container py-5 h-100">  -->
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white" 
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem; background-color:#0d0764">
                
                
                  <form
                    id="form"
                    enctype="multipart/form-data"
                    @submit.prevent="updatePicture()"
                    > 

                  <div class="card-body text-center" v-bind="user">
                    <div
                      v-if="user.imageUrl == null"                 
                    >
                      <img
                        src="../assets/photo-avatar-profil.png"
                        alt="photo de profil"
                        class=" rouned-circle mr-1 avatar"
                      />
                    </div>
                    <div v-else class="dropdown text-center">
                      <img
                        :src="user.imageUrl"
                        alt="photo de profil"
                        class=" rouned-circle mr-1 avatar"
                        id="avatar"
                      />
                    </div>
                  </div>
                  <div class="card-body d-flex flex-column justify-content-between" >
                    <label class="text-center label" for="image"
                      ><strong>Choisir ma photo de profil</strong></label
                    >
                    <input
                      type="file"  class="form-control"
                      name="image" id="image"
                      accept="image/*" ref="image"
                      @change="filePictureToUpload()"
                    />
                    <div class="card-body mx-auto">
                      <button
                        type="submit"
                        class="form-control btn btn-primary"
                        name="pictueUpdate"
                        id="pictureUpdate"
                        @click.prevent="updatePicture"
                      >
                        Confirmer
                      </button>
                    </div>

                  </div>
                </form>
            </div>
                                   

                    <!-- <img
                      src="../assets/photo-avatar-profil.png"
                      alt="photo de profil provisoire" id="avatar-profil"
                      class="img-fluid my-5"
                      style="width: 120px;"/>                       
                        
                    <label class="text-center label" for="image"                                                                
                    >Changer la photo de profil                                        
                    </label> 

                    <input
                    type="file" class="form-control" id="image" name="image"
                    accept="image/*" ref="image" 
                     @change="pictureToUpload()"         
                    />
                     
                    <div class="card-body mx-auto">
                      <button
                        type="submit"
                        class="form-control btn btn-primary btn-confirm"
                        name="pictureUpdate"
                        id="pictureUpdate"
                        @click.prevent="updatePicture()"
                      > Confirmer
                      </button> 
                    </div> -->
                  <!-- </form>   
                </div>                                                           
            </div>     -->

         

              <div class="card-body p-4">
                <h6>Informations</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">                                        
                      <h6>Prénom</h6>
                      <p class="text-muted">{{ user.firstName }}</p>                      
                  </div>
                  
                  <div class="col-6 mb-3">
                    <h6>Nom</h6>
                    <p class="text-muted">{{ user.lastName }}</p>
                  </div>
                </div>                
               
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{{ user.email }}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Date d'inscription</h6>
                    <p class="text-muted">{{ user.createdAt }} </p>
                  </div>
                </div>
                <button
                    class= "form-control btn btn-danger"
                    v-bind= "user"
                    @click="deleteUser(id)">
                    Supprimer le compte
                </button>             
              </div>            
            </div>

         
        </div>
      

      </div>
    </div>
</section>
</div> 



</template>



<script>
export default {
  name: "profilUser",

  data(){   
    return {      
      user:{ 
        userId: localStorage.getItem("userId"),       
        firstName: "",
        lastName: "",
        email: "",  
        imageUrl: "", 
        creatAt:"",            
      },
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("userId"),
        image: "",      
    }
  },
  
  async created() {
    let url = `http://localhost:3000/api/user/${ this.userId }`;
    let options = {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      }
    };

  await fetch(url, options)    
    .then((response) => {
      this.user = response.data.user;
        console.log(this.user);
      this.image = response.data.image;
    });  
  },      
       
  methods: {
    filePictureToUpload(){
      this.image = this.$refs.image.files[0];
      this.imageUrl = URL.createObjectURL(this.image)
    },

    async updatePicture() {
      const formData = new FormData();
      formData.append("userId", parseInt(localStorage.getItem("userId")));
      formData.append("image", this.image);
      formData.append("imageUrl", this.imageUrl);
      console.log(this.image);
      console.log(this.imageUrl);
      console.log("test-récup", formData.get("imageUrl")); 

    
    let url = `http://localhost:3000/api/user/${ this.userId }`;
    let options = {
      method: "PUT",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      }
    };
    await fetch(url, options)    
      .then((response) => {
        this.user = response.data.user;
        this.image = response.data.image;
        });  
  },


 async deleteUser() {
        let url = "http://localhost:3000/api/user/${this.user.userId }"
              let option = {
                  method: "DELETE",
                  headers: {
                      'Authorization': 'Bearer ' + localStorage.getItem("token"),
                  }
              };
          await fetch(url, option)
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