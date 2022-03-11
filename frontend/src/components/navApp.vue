<template>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg " style="background-color: #0d0764!important;">
  <!-- Container wrapper -->
  <div class= "container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

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
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Publier un post</a>
        </li>  
        <li class="nav-item">
            <router-link to= "/post" 
            class="nav-link"             
            title= "acceuil">
            Acceuil
            </router-link>      
         
        </li>       
        
      </ul>
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
          class="dropdown-toggle d-flex align-items-center hidden-arrow"         
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
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->




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