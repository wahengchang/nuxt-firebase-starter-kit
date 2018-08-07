<template>
  <v-container>
    <h1> Login </h1>
    <google-login></google-login>
    <facebook-login></facebook-login>
  </v-container>
</template>

<script>
import GoogleLogin from '~/components/GoogleLogin.vue'
import FacebookLogin from '~/components/FacebookLogin.vue'
export default {
  components: {
    GoogleLogin,
    FacebookLogin
  }
}
</script>

<style lang="css">
</style>