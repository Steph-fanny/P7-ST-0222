<template>
    <div class="container-fluid">    
    <!-- On récupére les posts des plus récents aux plus anciens: boucle avec vfor -->  
  <!-- tableau de post-->
    <div class="bloclist" 
      v-for= "post in posts.slice().reverse() || []" 
      :key= "post.id"
       >
                         
      <div
        class="card-author">
        <h3>{{ post.user.firstname }} {{ post.user.lastname }}</h3>
      </div>
            
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
        
        <button class="btn btn-primary" @click="showComments">
          Voir les commentaires
        </button>

      <!-- <div><addComment/></div> -->
      <!-- <addComment: commentId= "comment.id" :commentuserId="comment.userId"/> -->
     

      </div>
    </div>  
  </div>    
      
      
   
</template>


<script>

// import addComment from '@/components/addComment'


export default {
name: 'listPost',  

components: {
   
      
  },

 data() {
      return {
        firstname: "",
        lastname: "",
        userId: localStorage.getItem("userId"),           
        posts: [],
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
                this.posts = data.post;
                console.log(this.posts)
            })
            .catch(error => console.log(error))
    },
    methods: {
        ///DELETE MESSAGE//
        deletePost(postid) {
            let url = `http://localhost:3000/api/post/${ postid }`
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