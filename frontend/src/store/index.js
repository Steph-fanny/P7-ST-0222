import { createStore } from 'vuex'



export default createStore({
  state: {
    users:[],
    user: {
    firstName:"",
    lastName:"",
    email:"",
    token : null,
    isAdmin :false
  },
},

  getters: {
  },

  mutations: {
    saveUserInfos (state, [firstName, lastName, email, isAdmin]) {
      state.user.firstName = firstName,
      state.user.lastName = lastName,
      state.user.email = email,
      state.user.token = localStorage.getItem('token'),
      state.user.isAdmin = isAdmin    
    },


  },
  actions: {
    getOneUser() {             
      let url = `http://localhost:3000/api/user/${this.user.id }`;
      let options = {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
      };

    return fetch(url, options).then(function (res) {
      res.json().then(function (data) {         
        return data;
      })                     
            
    });
  },

  },
  modules: {
  }
})
