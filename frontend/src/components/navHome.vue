<template>
 
 <header>
      <img src="../assets/logo-haut.png" width="350" height="250" alt="le logo de groupomania" title="logo groupomania" id="logo" />
 </header>

</template>


<script>
export default {
  name: 'navHome',
  }
</script>

<style>
header{
  display: flex;  
  align-items: center;
  height: 8 rem;
  margin-top: 10px;
  margin-bottom: 30px;
  padding-top: 20px;
}

#logo{
      display: block;
    margin-left: auto;
    margin-right: auto;
}

</style>