<template>
<div>
<div><navApp/></div>

<div><profil-user/></div>
</div>

</template>

<script>
import profilUser from "@/components/profilUser.vue";
import navApp from "@/components/navApp.vue";



export default {
  name: "accountUser",
  components: {
    navApp,
    profilUser
   
   
  },

}
</script>

<style>

</style>