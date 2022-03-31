<template>
    <div class="container-fluid">    
    <!-- On récupére les posts : boucle avec vfor -->  
  <!-- tableau de post-->
    <div 
      v-for= "post in posts" 
      :key= "post.id"
      class="bloclist" 
       >

    <div class="d-flex justify-content-between align-items-center">
      <div class="mr-2">
        <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
      </div>
      <div class="ml-2">
      <div class="h5 m-0">{{ user.firstname }} {{ user.lastname }}</div>  
      <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div> 
    </div>                                        
                       
    <div class="card-body">     
      <p class="card-text">{{ post.content }}</p>
      <img v-bind:src ="post.imageUrl" alt=""> 
    </div>

    
    <div class="card-footer">
      <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
      <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
          <!-- <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a> -->
      <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>Like</button> 
      <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>Comment</button> 
      <button v-if="post.userId == userId"
            type="button"
            class=" btn btn-danger"
            title="supprimer"
            aria-label="bouton supprimer"       
            @click.prevent="deletePost(post.id)">
            supprimer le post        
          </button>        
        </div>                            

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
        firstName: "",
        lastName: "",
        userId: localStorage.getItem("userId"), 
        imageUrl:"",          
        posts: [],
        }
    },
  
 



    mounted() {
        this.userId = JSON.parse(localStorage.getItem("userId"));        
        console.log(localStorage);

        let url = "http://localhost:3000/api/post/";
        let options = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        };
        fetch(url, options)
         .then(function(res) {   
          return res.json();
        })
          .then(function(data) {        
          

            console.log(data)
            .catch(error => console.log(error))
          })
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

body {
            background-color: #eeeeee;
        }

        

        .gedf-wrapper {
            margin-top: 0.97rem;
        }

        @media (min-width: 992px) {
            .gedf-main {
                padding-left: 4rem;
                padding-right: 4rem;
            }
            .gedf-card {
                margin-bottom: 2.77rem;
            }
        }

        /**Reset Bootstrap*/
        .dropdown-toggle::after {
            content: none;
            display: none;
        }

</style>