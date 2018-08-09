<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
     <v-btn class="signIn mb-2" primary @click.native="FaceBook">Facebook Sign In</v-btn>
    </v-flex>
  </v-layout>

</template>

<script>
import firebase, {auth} from '~/services/fireinit'

export default {
  methods: {
    async FaceBook () {
      try {
        await auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        console.log('Finished Facebook login')
        return location.reload()
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>

<style lang="css">
.signIn {
}
</style>
