


import affichagePostVue from "@/components/affichagePost.vue"



      //   add comment
      //  Post
                /*{ <!-- <div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">@LeeCross</div>
                                    <div class="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div class="h6 dropdown-header">Configuration</div>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Hide</a>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                        <a class="card-link" href="#">
                            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                        </a>

                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
                            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                        <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                        <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>          }--> */


  // commenatire afficher 
//   <div class="d-flex flex-column comment-section">
//                 <div class="bg-white p-2">
//                     <div class="d-flex flex-row user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40">
//                         <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">Marry Andrews</span><span class="date text-black-50">Shared publicly - Jan 2020</span></div>
//                     </div>
//                     <div class="mt-2">
//                         <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                     </div>
//                 </div>
//                 <div class="bg-white">
//                     <div class="d-flex flex-row fs-12">
//                         <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
//                         <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
//                         <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
//                     </div>
//                 </div>  






commentaire
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



        affichagePostVue

        <div>
    
    <div class="container-fluid gedf-wrapper">
        <div class="row">
                        
            <div class="col-md-6 gedf-main">
                
                <!--- \\\\\\\Post-->
                <div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">@LeeCross</div>
                                    <div class="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div class="h6 dropdown-header">Configuration</div>
                                        <a class="dropdown-item" href="#">Save</a>
                                        <a class="dropdown-item" href="#">Hide</a>
                                        <a class="dropdown-item" href="#">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                        <a class="card-link" href="#">
                            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                        </a>

                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
                            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                        <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                        <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>                
                                           
            </div>
        </div>
    </div>




    profil modifier
    / let url = `http://localhost:8080/api/user/${ this.userAccount.formData }`;
//     let options = {
//       method: "PUT",
//       headers: {
//         'Authorization': 'Bearer ' + localStorage.getItem("token"),
//       }
//     };
//     fetch(url, options)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         this.userAccount = data.userAccount
//         this.image = data.image;       
//       })
//       .catch(error => console.log(error))
//     },


//  <script src="/path/to/vue.js"></script>
//     <script src="/path/to/vuex.js"></script>