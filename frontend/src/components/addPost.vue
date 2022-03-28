<template>
<div class="card">     
    <div class="card gedf-card">       
        <div class="card-body" >
            <div class ="card-top">                                  
            </div>  
            <form 
                class="container text-center form-group"
                @submit.prevent="addPost()"
                enctype="multipart/form-data"
                method="post"
                >

                <div class= "form-group">            
                    <label for= "content"></label>
                        <textarea type="text" 
                        id="content" name="content" rows="5" 
                        class="form-control" 
                        placeholder="Que voulez-vous partager aujourd'hui?"
                        required v-model="content"></textarea>
                </div>           
                <div class="btn-toolbar justify-content-between">
                    <div class="btn-group">
                        <button 
                        type="submit"
                        id="btn-post"
                        class="btn btn-primary"
                        @click.prevent="addPost"
                        >Publier</button>    

                        <label for="image" class="form-control-label"
                        >Choisissez votre image</label>                        
                        <input 
                        type="file"
                        class="btn btn-primary"
                        ref="image"
                        id="image" name="image"
                        accept="image/png, image/jpeg, gif"
                        aria-describedby="image"                       
                        @change="selectFile()"/>

                        <button 
                        type="submit"
                        id="btnP" class="btn btn-primary"
                        @click="annulerPost"
                        >Annuler</button>  
                                                                            
                    </div>     
                </div> 
            </form>                                           
        </div>
    </div>
</div> 


</template>

<script>

export default {
    name:'addPost',    
    data() {
        return {                                        
            content:"" ,   
            imageUrl:""  ,                    
            image:"",    
            token: localStorage.getItem("token"),
            userId:"",
           
        }
    },
//      data:{
//     post: [
//       content:"" ,   
//         imageUrl:""  ,  

//     ]
//   }



    mounted() {
            this.userId = JSON.parse(localStorage.getItem("userId"));
            console.log(this.userId)
        },



    methods: {                    
        selectFile() {
            this.image = this.$refs.image.files[0];
            this.imageUrl = URL.createObjectURL(this.image);
        },

    /*** Créer une nouvelle publication ***/
        addPost() {
            let deliverPost = {   
                "userId" : this.userId,
                "username":this.username,
                "image" : this.image,         
                "content": this.content,                
            }      
            console.log(deliverPost)

            //creer un nouveau post
    //   const formData = new FormData();
    //     formData.append("userId", parseInt(localStorage.getItem("userId")));
    //     formData.append("image", this.image);     
    //     formData.append("content", document.getElementById("content").value);

    //   console.log("test", formData.get("image"));
    //   console.log("test", formData.get("content"));
    //       // si message vide       
    //     if (formData.get("content") == "") { this.error = "Message vide";
    //     } else {
            let url = "http://localhost:3000/api/post/new"
            let options = {
                method: "POST",
                body: JSON.stringify(deliverPost),
                headers: {    
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),                
                    'Content-Type': 'application/json'
                }
            }
           
            fetch(url, options)
                .then(res => res.json())
                .then((res) => {                
                    console.log(res)
                    if (res.ok) {
                        window.location.reload();
                        this.Post = {} // Retour à 0 des inputs //
                    } else {
                        alert("Post bien reçu ");
                    }
                })
                .then(this.$router.push("/listPostPage"))
                .catch(error => console.log(error))
            }
        }
    }
// } 


      
          

</script>

<style>

.publication-link{
    background-color: #0d0764 !important;

}
#image{
    display:none;
}
.gedf-card  {
    margin:auto;   
    width: 50%;
    margin-top:50px;
    flex-direction: row;
    justify-content: center;
}
.btn {
    background-color: #0d0764 !important;
    margin-right:5px;
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