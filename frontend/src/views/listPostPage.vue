<template>
<div class = container-post>
  <form>
    <div><navApp/></div>
    <div><createPost/></div>


    <div><affichagePost/></div>
  
  
  </form>

</div>  



</template>


<script>
import navApp from '@/components/navApp'
import affichagePost from '@/components/affichagePost'
import createPost from '@/components/createPost'




export default {
name: 'listPostPage',  

  components: {
  navApp, 
 createPost,

 affichagePost,

 
 
  
  
  },
  }


</script>

<style>

</style>