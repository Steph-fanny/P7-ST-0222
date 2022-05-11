import { createStore } from 'vuex'



export default createStore({
  state: {
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
    saveUserInfos (state, [firstName, lastName, email, isAdmin]){
      state.user.firstName = firstName,
      state.user.lastName = lastName,
      state.user.email = email,
      state.user.token = localStorage.getItem('token'),
      state.user.isAdmin = isAdmin    
    },


  },
  actions: {
  },
  modules: {
  }
})
