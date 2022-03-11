<template>
<div class="card">     
    <div class="card gedf-card">        
        <div class="card-header">            
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">  
                <li class="nav-item">
                    <a class="nav-link active publication-link" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                    a publication</a>
                </li>
                <li class="nav-item ">
                    <input
                    type="file" class="form-control publication-link"
                    name="image" id="image"
                    ref="image" aria-describedby="image"                    
                    @change="selectFile()" />       
                </li>
            </ul>
        </div>
        <div class="card-body">
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="posts" role="tabpanel" 
                    aria-labelledby="posts-tab">
                    <div class="form-group">
                        <label class="sr-only" for="message">post</label>
                        <textarea class="form-control" id="message" rows="3" 
                         placeholder="Que voulez-vous partager aujourd'hui?"
                         v-model="inputMessage.title">
                         </textarea>
                    </div>
                </div>                            
            </div>
        <div class="btn-toolbar justify-content-between">
            <div class="btn-group">
                <button 
                type="submit"
                id="btnP" class="btn btn-primary"
                @click.prevent="sendMessage"
                >Publier</button>
            </div>                            
        </div>
    </div>
</div>             

</div>

</template>

<script>
export default {
    name:'createPost',
    data() {
        return {
            inputMessage: {                
                content: "",
            },
            userId: ""
        }
    },
    

    methods: {
        selectFile() {
        this.image = this.$refs.image.files[0];
        this.imageUrl = URL.createObjectURL(this.image);
        },
    },   
     /*** Envoyer le post***/
     sendMessage() {
            let deliverMessage = {              
                "content": this.inputMessage.content,
                "userId": this.userId
            }
            console.log(deliverMessage)
            let url = "http://localhost:3000/api/post/new"
            let options = {
                method: "POST",
                body: JSON.stringify(deliverMessage),
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
                        this.inputMessage = {} // Retour à 0 des inputs //
                    } else {
                        alert("Message bien reçu ");
                    }
                })
                .then(this.$router.push("/postListPage"))
                .catch(error => console.log(error))
        }
    }
  

</script>

<style>

.publication-link{
    background-color: #0d0764 !important;

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