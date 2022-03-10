<template>
<div class = container-post>
    <div><navApp/></div>
   
   <div><createPost/></div>
    <!-- <div><postUser/></div> -->
  
    

</div>  



</template>


<script>
import navApp from '@/components/navApp'
// import postUser from '@/components/postUser'

import createPost from '@/components/createPost'




export default {
name: 'homePost',  

  components: {
  navApp,
  // postUser,
 
  createPost,
 
 
  
  
  },
  }


</script>

<style>

</style>