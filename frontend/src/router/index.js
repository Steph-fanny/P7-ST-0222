import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '@/views/homePage.vue'
import loginUser from '@/views/loginUser.vue'
import signupUser from '@/views/signupUser.vue'
import accountUser from '@/views/accountUser.vue'
import homePost from '@/views/homePost.vue'

const routes = [
  {
    //chemin 
    path: '/',
    name: 'homePage',
    // view correspondante
    component: homePage
  },
  {
    path: '/login',
    name: 'login',
    component : loginUser    
  },
  {
    path: '/signup',
    name: 'signup',
    component : signupUser   
  },
  {
    path: '/user/account',
    name: 'accountUser',
    component : accountUser 
  },

  {
    path: '/post',
    name: 'homePost',
    component : homePost  
  },
  
]

const router = createRouter({
  // option de create router : rajouter des # pour les liens
  history: createWebHashHistory(),
  routes
})

export default router
