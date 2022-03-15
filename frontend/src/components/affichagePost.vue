<template>
<div>
 <!-- On récupére les posts des plus récents aux plus anciens: boucle avec vfor -->
 <div class="card" :key="post.id" v-for="post in posts">
      <div
        class="card-header"
        v-for="user in users.filter((user) => {
          return user.id == post.userId;
        })"
        :key="user.id"
      >
      <img
          v-if="user.imageUrl == null"
          src="../assets/icon-profil.png"
          alt="photo de profil provisoire"
          title="photo de profil"
          class="avatar"
        />
        <img
          v-else
          :src="user.imageUrl"
          class="avatar"
          alt="profile picture"
          title="picture profile"
        />
        <span class="card-title">{{ user.firstName }} {{ user.lastName }}</span>
      </div>

    


    

          <div class="blocactions">
                <button v-if="message.userId == userId || isAdmin == true" 
                type="button" @click="deleteMessage(message.id)" class="accountbutton">Supprimez </button>
          </div>
       
        <addComment :messageId="message.id" :messageUserId="message.userId" />
      </div>   
   
               
             
                
      

</div>
</template>

<script>
import addComment from "@/components/addComment.vue";

export default {
name: "affichagePost",
components: {
    addComment
},

    data() {
        return {
            firstname: "",
            lastname: "",
            jobtitle: "",
            userId: "",
            isAdmin: "",
            messages: []
        }
    },
    // mounted() {
    //     this.userId = JSON.parse(localStorage.getItem("userId"));
    //     this.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    //     console.log(localStorage);
    //     let url = "http://localhost:3000/api/messages";
    //     let options = {
    //         method: "GET",
    //         headers: {
    //             'Authorization': 'Bearer ' + localStorage.getItem("token"),
    //         }
    //     };
    //     fetch(url, options)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             this.messages = data;
    //             console.log(this.messages)
    //         })
    //         .catch(error => console.log(error))
    // },
    // methods: {
    //     ///////////////////DELETE MESSAGE/////////////////////
    //     deleteMessage(messageid) {
    //         let url = `http://localhost:3000/api/messages/${ messageid }`;
    //         let options = {
    //             method: "DELETE",
    //             headers: {
    //                 'Authorization': 'Bearer ' + localStorage.getItem("token"),
    //             }
    //         };
    //         fetch(url, options)
    //             .then((response) => {
    //                 console.log(response);
    //                 alert("Suppression du message confirmé ! ");
    //                 window.location.reload();
    //             })
    //             .catch(error => console.log(error))
    //     },
    // },
}




</script>

<style lang = "css">
container-fluid gedf-wrapper{
height: auto;
width: 100%;
}

.bloclist {
  width: 70%;
  margin: auto;
  margin-top: 25px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px; 
  padding: 25px;
}



</style>