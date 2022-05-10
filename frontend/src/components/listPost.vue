<template>
  <div class="container-fluid gedf-wrapper">
    <!-- On récupére les posts : boucle avec vfor -->
    <!-- tableau de post-->
    <div v-for="post in posts" v-bind:key="post.id" class="bloclist">
    <!-- {{ post[0] }} -->
      <div class="post-card">
        <div class="card gedf-card">
          <div class="card-header container-info">
            <div class="mr-2">
              <img
                v-if="user.imageUrl == null"
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

              
            </div>
            <div class="ml-2 info-post">
              <div class="h5 m-0">{{ user.firstName }} {{user.lastName }}</div>
              <div class="text-muted h7 mb-2 time-post">
                <i class="fa fa-clock-o"></i> {{ post[0].createdAt }}
              </div>
            </div>
          </div>

          <div class="card-body">
            <p class="card-text">{{ post[0].content }}</p>
            <img v-bind:src="post[0].imageUrl" alt="" />
          </div>

          <!-- <div class="card-footer d-flex flex-row fs-12">
            <div class="like p-2 cursor">
              <i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span>-->
            <div> 
            <!-- <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                    <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div> -->
            <button
              v-if="post.userId == userId"
              type="button"
              class="btn btn-danger"
              title="supprimer"
              aria-label="bouton supprimer"
              @click="deletePost(post[0].id)"
            >
              supprimer le post
            </button>
          </div>

          <div class="card-comment">
            <div class="comment-info">
              <span class="comment-avatar float-left">
                <a href=""
                  ><img
                    class="rounded-circle"
                    src="../assets/photo-avatar-profil.png"
                    width="40"
                    alt="photo-profil-avatar"
                /></a>
              </span>
              <div class="form-group">
                <label for="content"></label>
                <textarea
                  type="text"
                  id="content"
                  name="content"
                  rows="2"
                  cols="50"
                  class="form-control"
                  placeholder="Ecriver votre commentaire"
                  required
                ></textarea>
              </div>
            </div>

            <div class="mt-2 text-right">
              <button
                class="send btn btn-primary btn-sm shadow-none bnt-send"
                type="submit"
                title="commentaire"
                aria-label="créer un commentaire"
              >
                Publier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
   
<script>
export default {
  name: "listPost",

  data() {
    return {
      user:{       
      id: localStorage.getItem("userId"),   
      userId: "",    
      firstName: " ",
      lastName: "",
      email: "" ,
      imageUrl: "", 
      image:"", 
      isAdmin: "",
      },
      post:[],
      posts: [],
    };
  },

  async mounted() {
    this.userId = localStorage.getItem("userId");
    this.isAdmin = localStorage.getItem("isAdmin");
    console.log(localStorage);

    // console.log("test");
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
        console.log(this.posts);
        return data;
      });
    });
  },
  methods: {
    async getPosts() {
      console.log("test");
      let url = "http://localhost:3000/api/post";
      let options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      return await fetch(url, options).then(function (res) {
        res.json().then(function (data) {
          console.log(data);
          return data;
        });
      });
    },

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
  },
};
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