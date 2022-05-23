<template>
<div>
<div><navApp/></div>

<div>
    <p>Listes des utilisateurs</p>
</div>

</div>
</template>



<script>
import navApp from "@/components/navApp.vue";

export default {
  name: "listUsersAdmin",
  components: {
    navApp,
   
  },

  data() {
    return { 
      
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),  
      users:[],
      user: {
        id: localStorage.getItem("userId"),
        userId: "",    
        firstName: " ",
        lastName: "",      
        imageUrl: "",         
       
      },
     
    };
  },

 
  async created (){          
    const url = `http://localhost:3000/api/user/accounts`;
    console.log(this.users)
    const options = {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
          }
      };

      await fetch(url, options).then((res) => {
        res.json().then((data) => { 
          console.log(data)
          console.table(data)
          this.users = data             
        })                 
      })               
  }, 
    
 


  }





</script>

<style>

</style>