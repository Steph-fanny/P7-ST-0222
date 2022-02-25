
// nav page principale application
<template>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light"> 
  <div class="container-fluid">
    <!-- bouton sandwich : ouvrir le menu -->
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
    <div class="collapse navbar-collapse" 
    id="navbarSupportedContent">
      <!-- menu navigation -->
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="../assets/icon-left-font.png"
          height="15"
          alt="icone groupomania"
          loading="lazy"
        />
      </a>
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">acceuil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Post</a>
        </li>        
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Elements à Droite: profil -->
    <div class="d-flex align-items-center">         
      
      <!-- Avatar -->
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="photos de profil"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">Mon profil</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Utilisateurs</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Se deconnecter</a>
          </li>
        </ul>
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
    name : "navApp",
    

    
}
</script>

<style>

</style>