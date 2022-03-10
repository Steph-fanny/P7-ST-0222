<template>
<div class = container-profil>
  <section class="vh-100" style="background-color: #f4f5f7;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white" style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem; background-color:#706e6e">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar"
                class="img-fluid my-5"
                style="width: 120px;"
              />
              <i class="far fa-edit mb-5"></i>
              <p>Changer la photo de profil</p>                       
                     
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Informations</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                     
                    <h6>Prénom</h6>
                    <p class="text-muted"></p>
                      </div>
                  
                  <div class="col-6 mb-3">
                    <h6>Nom</h6>
                    <p class="text-muted">123 456 789</p>
                  </div>
                </div>                
               
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">info@example.com</p>
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
}
};

</script>

<style>

</style>