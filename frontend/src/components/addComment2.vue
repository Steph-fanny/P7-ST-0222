
<template>

  <div class="card">     
    <div class="card gedf-card">       
      <div class="card-body" >
        <div class ="card-top">
          <form class="mt-3">
            <input
              v-bind="$attrs"
              class="content" name="content"
              ref="content"
              placeholder="Tapez un commentaire !"
            />
              <span id="btn-publication">
                <button
                  type="submit" title="créer"
                  aria-label="créer un commentaire"
                  class="btn btn-primary"
                  v-bind="$attrs"
                  ref="comment"
                  @click.prevent="createComment()"
                  
                >
                </button>
              </span>
          </form>
        </div>
      </div>
    </div>
  </div>

 </template>
   
<script>
  import axios from "axios";

  export default {
    name: "AddComment2",

    data() {
      return {
        userId: localStorage.getItem("userId"),
        token: localStorage.getItem("token"),
        postId: "",
        content: "",
        comment: {},
        comments: [],
      };
    },
    methods: {
      createComment() {
        axios
          .post("http://localhost:3000/api/comment", {
            userId: localStorage.getItem("userId"),
            postId: this.$refs.comment.id,
            content: this.$refs.content.value,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.token,
            },
          })
          .then(() => {
            this.$emit("postCommentResponse");
          })
          .catch((error) => {
            console.log(error);
          });
        this.$refs.content.value = "";
      },
    },
  };
</script>

<style >

</style>
