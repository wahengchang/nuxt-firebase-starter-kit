<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
     <v-btn class="signIn mb-2" primary @click.native="googleSignUp">Google Sign In</v-btn>
    </v-flex>
  </v-layout>

</template>

<script>
import firebase, {auth} from '~/services/fireinit'

export default {
  methods: {
    async googleSignUp () {
      await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      console.log('Finished Google login')
      return location.reload()
    }
  }
}
</script>

<style lang="css">
.signIn {
}
</style>
