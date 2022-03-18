<template>
  <div class="container-fluid">    
    <!-- On récupére les posts des plus récents aux plus anciens: boucle avec vfor -->  
  <!-- tableau de post-->
    <div class="bloclist" 
      v-for= "post in posts.slice().reverse()" 
      :key= "post.id" >
                         
      <div
        class="card-author">
        <h3>{{ post.user.firstname }} {{ post.user.lastname }}</h3>
      </div>
      <!-- <img
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
        /> -->
      
      <div class = "date-post">
        <p>{{ post.createdAt }} </p>
      </div>
      <div class="bloc-contenu">
        <p> {{ post.content }} </p>
      </div>

      <div class="bloc-btn">
        <button v-if="post.userId == userId"
          type="button"
          class=" btn btn-danger"
          title="supprimer"
          aria-label="bouton supprimer"       
          @click="deletePost(post.id)">
          supprimer le post        
        </button>
        
        <button class="btn btn-primary" @click="showComments = !showComments">
          Commentaires
        </button>
      </div>
    </div>  
  </div>    
      
      <!-- <div v-if="post.imageUrl">
        <img
          class="card-img"
          :src="post.imageUrl"
          alt="image de la publication"
          title="image du post d'un utilisateur"
        />
      </div> -->
      
        <!-- <div v-if="showComments">
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
</div> -->
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
        firstname: "",
        lastname: "",
        userId: localStorage.getItem("userId"),
        token: localStorage.getItem("token"),          
        post: {},
        posts: [],
        // comment: {},
        // comments: [],
        // }
    }
  },
    mounted() {
        this.userId = JSON.parse(localStorage.getItem("userId"));        
        console.log(localStorage);
        let url = "http://localhost:3000/api/post";
        let options = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.posts = data;
                console.log(this.posts)
            })
            .catch(error => console.log(error))
    },
    methods: {
        ///DELETE MESSAGE//
        deletePost(postid) {
            let url = `http://localhost:3000/api/post/${ postid }`;
            let options = {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }
            };
            fetch(url, options)
                .then((response) => {
                    console.log(response);
                    alert("Suppression du message confirmé ! ");
                    window.location.reload();
                })
                .catch(error => console.log(error))
        },
    },
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