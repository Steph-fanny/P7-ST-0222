<template>


  <div class="container-fluid gedf-wrapper"> 
    <!-- On récupére les posts : boucle avec vfor  : tableau de post-->   
    <div class="bloclist"
      v-bind:key="post.id"
      v-for="post in posts.posts"       
    >
    <!-- {{ posts }} -->
      <div class="post-card">   
        <div class="card gedf-card">
          <div 
            class="card-header container-info"
            v-for="user in users.users.filter((user)=>{
              return user.id == post.userId})"
            v-bind:key="user.id"
          >
          <!-- photo profil user-->
            <div class="mr-2">  
               <img
                v-if ="user.imageUrl != null"
                :src="user.imageUrl"
                alt="photo de profil " id="avatar-profil"
                  class="rounded-circle"
                style="width: 50px;"
              />              
              <img                
               v-else
                src="../assets/photo-avatar-profil.png"
                alt="photo de profil provisoire" id="avatar-profil"
                class="img-fluid my-5"
                style="width: 50px;"
              />             
            </div>
            <!--info user-->
            <div class="ml-2 info-post">
              <div class="h5 m-0"> 
                {{ user.firstName }} {{user.lastName }}
              </div>
              <div class="h5 m-0 h7 mb-2 time-post">
                {{ moment(post.createdAt).fromNow() }}<i class="fa fa-clock-o"></i>
              </div>
            </div>           
          </div>

        <!--contenu du post-->
        <div class="card-body">
          <p v-if ="post.content!== 'null'" 
            class="card-text">{{ post.content }}
          </p>
          <div             
            v-if ="post.imageUrl != null">
              <img class="imagePost" 
              v-bind:src="post.imageUrl" alt="image du post" 
              />
          </div> 

          <!-- bouton effacer si l'utilisateur a écrit le post ou est admin-->       
          <div class ="btn-deletePost">                      
            <button 
              v-if="post.userId == user.id" 
              type="button"
              class="btn btn-danger"
              title="supprimer"
              aria-label="bouton supprimer"
              @click="deletePost(post.id)"
              >
              supprimer le post
            </button>
            <!-- bouton voir pour ajouter un commentaire--> 
            <button class="btn btn-danger" 
              @click="showCreateComment = !showCreateComment ">
              Commenter
            </button>
            
            <!-- bouton voir tous les commentaires-->  
            <button class="btn btn-danger" 
              @click="showComments= !showComments">
              Voir les Commentaires
            </button>            
          </div>         
        
        </div>
        
        <!--affichage composant écrire un commentaire-->
            <div
            v-if ="showCreateComment" >
              <addComment/>
              </div>       
            
            
        <!--affichage la liste des  commentaires-->
          <!-- <div v-if="comments == "null">        
            <p> Aucun commentaire pour le moment!</p>
          </div>  -->
        <div v-if="showComments">
          <!-- <div v-if="comments"> -->
            <div
            class="card-comment"
            v-for="comment in comments"
            :key="comment.id"
          >
       

        
          <!-- <div 
                                
              class="card-comment"            
              v-for="comment in comments"             
              v-bind:key="comment.id"          
            > -->
                                       
  
            <div 
            class="comment-info"        
            v-bind:key="user.id">

              <span class="comment-avatar float-left">
                <img
                  v-if = "user.imageUrl == null"
                  src="../assets/photo-avatar-profil.png"
                  alt="photo de profil provisoire" id="avatar-profil"
                  class="rounded-circle"
                  style="width: 50px;"
                  /> 
                    
                  <img  
                  v-else            
                  :src="user.imageUrl"
                  alt="photo de profil " id="avatar-profil"
                   class="rounded-circle"
                  style="width: 50px;"
                  /> 
              </span>

                <div class="card-author">                
                  {{ user.firstName }} {{user.lastName }}
                </div>
            </div>     
  
          <div class="card-body">
            <p v-if ="comment.content!== 'null'" class="card-text">{{ comment.content }}</p>
           
            <div class ="btn-deleteComment">                      
              <button 
              v-if="comment.userId == user.id" 
              type="button"
              class="btn btn-danger"
              title="supprimer"
              aria-label="bouton supprimer"
              @click="deleteComment(comment.id)"
              >
              supprimer le commentaire
              </button>   
            </div>  
          </div> 
          </div> 
       
     
          </div>

        <!-- </div> -->


        </div>       
      </div>
      </div>
    </div>

     

     
   
 
     
 
   
         

    


   


          
 
</template>
   
<script>
// import { mapState } from "vuex";
const moment = require("moment");
moment.locale("fr"); 
import addComment from'@/components/addComment'

export default {
  name: "listPost",
  components : {
    addComment     
  },




  data() {
    return { 
      showCreateComment : false, 
      showComments : false,      
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),  
      users:[],
      user: {
        id: localStorage.getItem("userId"),
        userId: "",    
        firstName: " ",
        lastName: "",      
        imageUrl: "",         
        isAdmin: "",
      },
      post: [],
      posts: [],
      moment: moment,
      date:"",
    };
  },


  // computed:{ 
  
      // // //   ...mapState(["user"])
  // },

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
            // const currentUser = this.users.users.filter((user)=>{
            // return user.id == this.post.userID})  
            // console.log(currentUser) 
        })                 
      })               
  }, 
    
  async mounted() {    
    this.userId = JSON.parse(localStorage.getItem("userId"));    
    console.log(localStorage);


    // appel à l'api pour affichage des posts
    let url = "http://localhost:3000/api/post";
    let options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    this.posts = await fetch(url, options).then((res) => {
      // traduction en json)
        res.json()      
      .then((data) => {
        console.log(data);        
        this.posts = data;
        console.log(this.posts)
        const currentPosts = this.posts.posts.reverse().slice;
       console.log(currentPosts)
      })       
    });


    // appel à l'api pour affichage des commentaires   
    let urlComment = "http://localhost:3000/api/comment";
    let optionsComment = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    this.comments = await fetch(urlComment, optionsComment).then((res) => {
      // traduction en json)
        res.json()      
      .then((data) => {
        console.log(data);        
        this.comments = data;      
      //   const currentComm = this.comments.comments.reverse().slice;
      //  console.log(currentComm)
      })       
    });
  },
  

 
  methods: {
    // even(users){
    //   return users.users.filter(this.user.id == this.post.userId)
    // },

    
    async getPosts()  {
      console.log("test");
      let url = "http://localhost:3000/api/post";
      let options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      return await fetch(url, options).then(function (res) {
        res.json()
         .then(function (data) {
         this.posts = data;
        console.log(this.posts);
        return data;
          
        });
      })
    },

  // Permet d'afficher la date de publication au bon format
    // dateFormat(date){
    //   if (date) {
    //     return moment(String(date)).format('DD/MM/YYYY')
    //   }
    // },



    //supprimer le message//
    deletePost(postid) {
      let url = `http://localhost:3000/api/post/${postid}`;
      let options = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      fetch(url, options)
        .then(function (res) {
          console.log(res);
          alert("Suppression du message confirmé ! ");
          window.location.reload();
        })
        .catch((error) => console.log(error));
    },

// recupération des commentaires
    async getComments()  {
      console.log("test");
      let url = "http://localhost:3000/api/comment";
      let options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      return await fetch(url, options).then(function (res) {
        res.json()
         .then(function (data) {
         this.comments = data;        
        return data;          
        });
      })
    },

//supprimer le commentaire//
    deleteComment(commentid) {
      let url = `http://localhost:3000/api/comment/${commentid}`;
      let options = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      fetch(url, options)
        .then(function (res) {
          console.log(res);
          alert("Suppression du commentaire confirmé ! ");
          window.location.reload();
        })
        .catch((error) => console.log(error));
    },





  },
};
</script>





  <style scoped lang="css">
body{
    background-color: #eeeeee;
}

.container-info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #0d0764 !important;
    color: white;

}
.fa{
    margin-left:5px;
}

.info-post{
    display:flex;
    flex-direction: column;
    align-items: flex-end;

}       
.imagePost{
  /* width : 300px;
  height : 200px; */
  text-align: center;
  margin: 5px; 
  width: 60vw;
  min-width: 220px;
  min-height: 220px;
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
  border: 1px solid #1026b9;
  border-radius: 8px;
  box-shadow: 1px 1px 2px rgb(24, 24, 24);

}
.card-comment{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding:5px;
    border-top: solid 1px rgb(218, 210, 210);
}

.card-body{
  display: flex;
  flex-direction :column;
  align-items: center;
  justify-content: center;
}

.comment-info{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding:5px;
}

.bnt-send{
    margin-top: 2px !important;
}
.btn-deletePost{
   display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
}

.comment-avatar img{
  margin-top: 1px;
  margin-right: 10px;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 40px;
}

.gedf-wrapper {
    margin-top: 0.97rem;
}

@media (min-width: 992px) {
    .gedf-main {
        padding-left: 4rem;
        padding-right: 4rem;
    }
}
    .gedf-card {
        margin-bottom: 0.5rem;  
        width : 70%;             
            
    }
            
    .post-card{
        margin:auto;   
        width: 90%;         
        flex-direction: row;
        justify-content: center;
    }
        

        /**Reset Bootstrap*/
        .dropdown-toggle::after {
            content: none;
            display: none;
        }

container-fluid gedf-wrapper{
height: auto;
width: 100%;
}

.bloclist {
  width: 100%;
  margin: auto;
  margin-top: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px; 
  padding: 0px;
} 


    </style>