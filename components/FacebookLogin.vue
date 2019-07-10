<template>
  <div>
    <div text-xs-center xs12 sm6 offset-sm3>
      <button class="signIn mb-2" @click="FaceBook">
        Facebook Sign In
      </button>
    </div>
  </div>
</template>

<script>
import firebase, { auth } from '~/utils/firebase'

export default {
  methods: {
    async FaceBook() {
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
