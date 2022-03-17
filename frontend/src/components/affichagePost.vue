<template>
  <div class="container-fluid">
    
    <!-- On récupére les posts des plus récents aux plus anciens: boucle avec vfor -->  
  <!-- tableau de post-->
    <div class="card" 
      v-for= "post in posts.slice().reverse()" 
      :key= "post.id" :post= "post">
                         
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
      <p v-if="post.content !== 'null'" class="card-text">{{ post.content }}</p>
      <div v-if="post.imageUrl">
        <img
          class="card-img"
          :src="post.imageUrl"
          alt="image de la publication"
          title="image du post d'un utilisateur"
        />
      </div>
      <span class="btn-end" v-if="user.id == post.userId">
        <button
          class=" btn btn-danger"
          title="supprimer"
          aria-label="bouton supprimer"
          v-bind="post"
          @click.prevent="deletePublication(post.id)"
        >
        </button>

        </span>
        <button class="btn btn-primary" @click= "showComments = !showComments">
          Commentaires
        </button>
        <div v-if="showComments">
          <div v-if="comments">
            <div
              class="card-comment"
              v-for="comment in comments.filter((comment) => {
                return comment.postId == post.id;
              })"
              :key="comment.id"
              >
              <p
                v-for="user in users.filter((user) => {
                  return user.id == comment.userId;
                })"
                :key="user.id"
                >
                <img
                  v-if="user.imageUrl == null"
                  src="../assets/icon-profil.png"
                  alt="photo de profil provisoire"
                  title="photo de profil"
                  class=" rouned-circle mr-1 avatar"
                />
                <img
                  v-else
                  :src="user.imageUrl"
                  class="avatar"
                  alt="profile picture"
                  title="picture profile"
                />
                <span class="card-title"
                  >{{ user.firstName }} {{ user.lastName }}</span
                >
              </p>
              <p class="card-description comment">{{ comment.content }}</p>
            <div v-if="comment.userId == user.id" id="btn-trash">

            <div>
                <button 
                type="button" 
                aria-label="bouton supprimer un commentaire"
                @click.prevent="deleteComment(comment.id)" 
                class="accountbutton">Supprimez le commentaire </button>
            </div>  
            </div>  
          </div>    
        </div>
    </div>                
  </div>                      
</div>
</template>

<script>
// import addComment from "@/components/addComment.vue";
// import axios from "axios";


export default {
name: "affichagePost",
components: {
    // addComment,
   
},

    data() {
      return {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),          
      post: {},
      posts: [],
      comment: {},
      comments: [],
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