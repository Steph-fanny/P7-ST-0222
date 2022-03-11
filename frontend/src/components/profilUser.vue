<template>
<div class = "container-profil">
  <section class="vh-100" style="background-color: #f4f5f7;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white" 
            style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem; background-color:#0d0764">
              
              
              <img
                src="../assets/icon-profil.png"
                alt="Avatar"
                class="img-fluid my-5"
                style="width: 120px;"/>
                           
                <label class="text-center label" for="image"
                >Changer la photo de profil</label>          
                  <input
                    type="file" class="form-control"
                      name="image" id="image"
                      accept="image/*" ref="image"
                      @change="filePictureToUpload()"
                    />




                     
            </div>
            <div class="col-md-8">
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
                    <p class="text-muted">{{ user.firstName }}</p>
                  </div>
                </div>                
               
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{{ user.email}}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Derniere connexion</h6>
                    <p class="text-muted">Dolor sit amet</p>
                  </div>
                </div>
                <button
                    class= "form-control btn btn-danger"
                    v-bind= "user"
                    @click.prevent= "deleteAccount(user.id)"
                  >
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

<script>
export default {
name: 'profilUser',

  data(){
  return {
        user: {
          id: localStorage.getItem("userId"),
          isAdmin: localStorage.getItem("isAdmin"),
          firtName: "",
          lastName: "",
          email: "",
          imageUrl: "",
        },
    }
  },
 methods: {
    filePictureToUpload() {
      this.image = this.$refs.image.files[0];
      this.imageUrl = URL.createObjectURL(this.image);
    }
  }
}
</script>

<style>
.container-profil{
  width: 100%;
  height:100%;
  
}

</style>