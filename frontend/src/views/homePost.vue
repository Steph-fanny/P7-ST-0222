<template>
<div class = container-post>
    <div><navApp/></div>

   <div><createPost/></div>
   
    <div>/><addComment/></div>
  
    

</div>  



</template>


<script>
import navApp from '@/components/navApp'
// import postUser from '@/components/postUser'

import createPost from '@/components/createPost'
import addComment from '@/components/addComment'



export default {
name: 'homePost',  

  components: {
  navApp,
  // postUser,
 addComment,
 createPost,
 
 
  
  
  },
  }


</script>

<style>

</style>