<template>
<div class="card">     
    <div class="card gedf-card">       
        <div class="card-body" >
            <div class ="card-top">
                 <span class="ma-0 text-caption text--disabled">
                il y a 
                </span>                   
            </div>                   
            <div class= "form-group">            
                <label for= "content"></label>
                    <textarea type="text" 
                    id="content" name="content" rows="5" 
                    class="form-control" 
                    placeholder="Que voulez-vous partager aujourd'hui?"
                    required v-model="inputPost.content"></textarea>
            </div>           
            <div class="btn-toolbar justify-content-between">
                <div class="btn-group">
                    <button 
                    type="submit"
                    id="btnP" class="btn btn-primary"
                    @click="addPost"
                    >Publier</button>    

                    <label for="image" class="form-control-label"
                    >Choisissez votre image</label>                        
                    <input 
                    type="file"
                    class="btn btn-primary"
                    ref="file"
                    id="image" name="image"
                    accept="image/png, image/jpeg"
                    aria-describedby="image"                       
                    @change="selectFile"/>

                    <button 
                    type="submit"
                    id="btnP" class="btn btn-primary"
                    @click="annulerPost"
                    >Annuler</button>  
                                                                         
                </div>     
            </div> 
                                                         
        </div>
    </div>
</div> 


</template>

<script>
import postDataService from "../services/postDataService";
export default {
    name:'createPost',
    data() {
        return {
            token: localStorage.getItem("token"),
            userId:localStorage.getItem("userId"),
            inputPost:{
               content:"" ,
                         
           },          
           image:"",
           imageUrl:"",     
               
        }       
    },
    
    methods: {
        selectFile() {
        this.image = this.$refs.image.files[0];
        this.imageUrl = URL.createObjectURL(this.image);
        },      

        // envoyer le post
        addPost() {
            const data = {
                content : this.inputPost.content,
                userId: localStorage.getItem("userId"),
                image: this.image,
                imageUrl :this.imageUrl     
            }
      
        postDataService.create(data)        
            .then(response => {
                this.post.id = response.data.id;
            console.log(response.data);
                
            })
            .catch(e => {
                console.log(e);
            });
        },
        newPost() {       
        this.post = {};
        }
    }
};


   


    //  /*** Envoyer le post***/
    //     addPost() {
    //         let deliverMessage = {              
    //             "content": this.inputMessage.content,
    //             "userId": this.userId,
    //             "image" : this.image,
    //         }
    //         console.log(deliverMessage)
    //         let url = "http://localhost:8080/api/post/new"
    //         let options = {
    //             method: "POST",
    //             body: JSON.stringify(deliverMessage),
    //             headers: {                    
    //                 'Content-Type': 'application/json'
    //             }
    //         }
    //         fetch(url, options)
    //             .then(res => res.json())
    //             .then((res) => {
    //                 console.log(res)
    //                 if (res.ok) {
    //                     window.location.reload();
    //                     this.inputMessage = {} // Retour à 0 des inputs //
    //                 } else {
    //                     alert("Message bien reçu ");
    //                 }
    //             })
    //             .then(this.$router.push("postListPage"))
    //             .catch(error => console.log(error))
    //     }
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