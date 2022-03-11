<template>
    <div class="container mt-5">
    <div class="commentaire d-flex justify-content-center row">
        <div class=" col-md-8">            
                </div>
                <div class="bg-light p-2">
                    <div class="d-flex flex-row align-items-start">
                        <img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40">
                        <textarea class="form-control ml-1 shadow-none textarea">
                            
                            </textarea></div>
                    <div class="mt-2 text-right">
                        <button class="send btn btn-primary btn-sm shadow-none " 
                            type="button"
                            @click.prevent= "postComment()"
                            >Post comment</button>

                    <button class=" send btn btn-primary btn-sm shadow-none ml-1 " type="button">Cancel</button></div>
                </div>
            </div>
        </div>
    
 


</template>

<script>
export default {
    name :"addComment"

}
</script>

<style>
.commentaire{
width:50%;
display: block;
flex-direction: row;
text-align: center;
}

.send{
    background-color: #FD2D01 !important;
    color: white;    
    margin-right: 20px;
    
}

</style>