<template>
  <section class="container">
    <h1>Login</h1>
    <div class="buttonRow">
      <GoogleLogin />
      <FacebookLogin />
      <GithubLogin />
    </div>
  </section>
</template>

<script>
import requiredLogout from '~/mixins/requiredLogout'
import GoogleLogin from '~/components/GoogleLogin.vue'
import FacebookLogin from '~/components/FacebookLogin.vue'
import GithubLogin from '~/components/GithubLogin.vue'

export default {
  components: {
    GoogleLogin,
    FacebookLogin,
    GithubLogin
  },
  mixins: [requiredLogout]
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.buttonRow {
  padding: 10px 20px;
}

.buttonRow button {
  height: 50px;
  line-height: 50px;
  width: 150px;
  border: 1px gray solid;
  margin: 10px 0;
}
</style>
