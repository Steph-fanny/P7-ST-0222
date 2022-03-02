<template>
  <div class="home_Login">
    <headerLogo/>
    <loginUser/>
    
    
  </div>
</template>

<script>

import headerLogo from '../components/headerLogo.vue'
import loginUser from '../components/loginUser.vue'

export default {
  name: 'login',
  components: {
    headerLogo,
    loginUser,
  }
}
</script>
