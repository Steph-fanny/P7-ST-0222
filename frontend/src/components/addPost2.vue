<template>
<div class="container-fluid gedf-wrapper">       
    <div class="post-card">                                  
        <div class="card gedf-card">
            <div class="card-header container-info">                
                <div class="mr-2 ">
                    <img class="rounded-circle" src="../assets/photo-avatar-profil.png" width="50" alt="photo-profil-avatar" >
                </div>
                <div class="ml-2 info-post">
                    <div class="h5 m-0"> {{ user.firstname }} {{ user.lastname }} </div>
                    <div class="text-muted h7 mb-2 time-post"> <i class="fa fa-clock-o"></i>10 min ago</div>
                </div>                      
            </div>                           
                 
            <div class="card-body">                       
                <p class="card-text">{{ post.content }}</p>
                <img v-bind:src ="post.imageUrl" alt=""> 
            </div>

            <div class="card-footer d-flex flex-row fs-12">
                <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                    <!-- <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                    <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div> -->
                <button v-if="post.userId == userId"
                type="button"
                class=" btn btn-danger"
                title="supprimer"
                aria-label="bouton supprimer"       
                @click.prevent="deletePost(post.id)">
                supprimer le post        
                </button>       
            </div> 
        
            <div class = "card-comment">
                <div class ="comment-info">
                    <span class="comment-avatar float-left">
                        <a href=""><img class="rounded-circle"  src="../assets/photo-avatar-profil.png" width="40"  alt="photo-profil-avatar"></a>
                    </span>
                    <div class= "form-group">            
                        <label for="content"></label>
                            <textarea type="text" 
                            id="content" name="content" rows="2" cols="50" 
                            class="form-control" 
                            placeholder="Ecriver votre commentaire" 
                            required ></textarea>
                    </div>
                </div>
                
                <div class="mt-2 text-right">
                        <button class="send btn btn-primary btn-sm shadow-none bnt-send " 
                            type="submit" title="commentaire"
                            aria-label="créer un commentaire"
                            >Publier
                        </button>   
                </div>             
            </div>    
        </div>                                  
    </div>
</div>    
</template>


<script>
export default {
    name: 'listPost',  



    data() {
        return {
            firstName: "",
            lastName: "",
            userId: "",
            imageUrl:"",    
            isAdmin:"",      
            posts: [],
            }
        },
        
    mounted() {
        this.userId = JSON.parse(localStorage.getItem("userId"));  
        this.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));      
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
                res.json();
            })
            .then(function(data) {  
                this.posts=data;                       
                console.log(this.posts)                
            })
            .catch(error => console.log(error))
    },

    //supprimer le message//
    deletePost(postid) {
            let url = `http://localhost:3000/api/post/${ postid }`
            let options = {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }
            };
            fetch(url, options)
                .then(function(res) { 
                    console.log(res);
                    alert("Suppression du message confirmé ! ");
                    window.location.reload();
                })
                .catch(error => console.log(error))
    },
}



</script>

  
  






  <style lang="css">
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
    margin-right:5px;
}

.info-post{
    display:flex;
    flex-direction: column;
    align-items: flex-end;

}       

.card-comment{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding:5px;
    border-top: solid 1px rgb(218, 210, 210);
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
        margin-bottom: 2.77rem;                
            
    }
            
    .post-card{
        margin:auto;   
        /* width: 50%;          */
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
  width: 70%;
  margin: auto;
  margin-top: 25px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px; 
  padding: 25px;
} 


    </style>


