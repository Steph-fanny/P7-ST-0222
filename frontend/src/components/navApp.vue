<template>
   
  <nav class="navbar navbar-expand-lg " style="background-color: #0d0764!important;">
    <!-- Container wrapper -->
    <div class= "container-fluid">   
      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="../assets/icon-left-font.png"
            height="115"
            alt="logo groupomania"
            loading="lazy"
          />
        </a>
        <!-- Left links -->      
          <li class="nav-item navbar-nav me-auto mb-2 mb-lg-0">
            <router-link
            to="/posts"
            class="nav-link">
            Créer un post
            </router-link>
          </li>  

        <li class="nav-item navbar-nav me-auto mb-2 mb-lg-0">
            <router-link
            to="/posts"
            class="nav-link">
            Voir tous les posts
            </router-link>
          </li>  
  
          <li class="nav-item navbar-nav me-auto mb-2 mb-lg-0">
              <router-link to= "/post" 
              class="nav-link"             
              title= "acceuil">
              Accueil
              </router-link>    
          </li>       
          
      <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center">
          <li class= "dropdown-item">
              <router-link to= "/" 
              @click= "logout"  
              title= "deconnexion">
              Deconnexion
              </router-link>            
            </li>
              
        <!-- Avatar -->
        <div class="dropdown">
          <router-link to= "/user/account" 
            class="d-flex align-items-center"         
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="../assets/icon-profil.png"
              class="rounded-circle"
              height="85"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </router-link>
          
        </div>
      </div>
      
    </div>
  </nav>
</template>

<script>

export default {
  name: "navApp",
  
methods : {
    logout() {
        localStorage.clear();
        this.$router.push("/");
    }
}

};
</script>

<style>
.nav-link {
    color :white !important;
}
.dropdown-item{
  color: white !important;
}

</style>