<template>
    <div class="container mt-5">
        <div class="commentaire d-flex justify-content-center row">           
            <div class="bg-light p-2">
                <div class="d-flex flex-row align-items-start">
                                  
                    <img class="rounded-circle" 
                        src="../assets/photo-avatar-profil.png" width="40"> 
                         
                        <textarea class="form-control ml-1 shadow-none textarea"
                            type="text" id="content" 
                            name="content" rows="2" 
                            v-model="content" 
                            placeholder="Ecrivez votre commentaire ici">
                        </textarea > 
                </div>                                           
                <div class="mt-2 text-right">
                    <button class="send btn btn-primary btn-sm shadow-none " 
                        type="submit" title="commentaire"
                        aria-label="créer un commentaire"
                        @click.prevent="createComment()">Publier
                    </button>   
                </div>
                  
            </div>    
        </div>  

        <!--liste des commentaire-->
        <div> 
            <div v-for="comment in comments" :key="comment.id" class="blocComment" >                        
                <p> {{ comment.content }} </p>           
            </div>
        </div>
    </div>            
 
</template>

<script>
//     import axios from "axios";
//     export default {
//         name: "addComment",
//         data() {
//             return {
//                 userId: localStorage.getItem("userId"), 
//                 token: localStorage.getItem("token"),               
//                 postId: "",
//                 content: "",
//                 comment: {},
//                 comments: [],
//             };
//         },
//     // mounted(){
//     //   //GET commentaire
//     //     let url = "http://localhost:3000/api/comments/" + this.messageId + "/display";
//     //     let options = {
//     //         method: "GET",
//     //         headers: {
//     //             'Authorization': 'Bearer ' + localStorage.getItem("token"),
//     //         }
//     //     };
//     //     fetch(url, options)
//     //         .then(response => response.json())
//     //         .then(data => {
//     //             console.log(data)
//     //             this.comments = data;
//     //             console.log(this.comments)
//     //         })
//     //         .catch(error => console.log(error))
//     // },
    
//         methods : {
//             createComment() {            
//                 let inputContent = {
//                     "content": this.content,
//                 //     "commentId": this.commentId
//             }
//             axios
//             .post("http://localhost:3000/api/comment", {
//                 userId: localStorage.getItem("userId"),
//                 postId: this.$refs.comment.id,
//                 content: this.$refs.content.value,
//             headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + this.token,
//             },
//             })




//         //     let url = "http://localhost:3000/api/comment/new"
//         //     let options = {
//         //         method: "POST",
//         //         body: JSON.stringify(inputContent),
//         //         headers: {
//         //             'Authorization': 'Bearer ' + localStorage.getItem("token"),
//         //             'Content-Type': 'application/json'
//         //         }
//         //     }
//         //     fetch(url, options)
//         //         .then(res => res.json())
//         //         .then((res) => {
//         //             console.log(res)
//         //             if (res.ok) {
//         //                 this.content = {}
//         //             } else {
//         //                 alert("Commentaire envoyé");
//         //             }
//         //         })
//         //         .then(window.location.reload())
//         //         .catch(error => console.log(error))
//         // }
//     },
//     }            
// };
                    


// </script>

<style>
.commentaire{
width:50%;
display: block;
flex-direction: row;
text-align: center;
}

rounded-circle{
    margin-right: 10px;
}
.send{
    background-color: #FD2D01 !important;
    color: white;    
    margin-right: 20px;
    
}

</style>