<template lang="html">
  <v-parallax src="/static/doc-images/IMG_7088.jpg" height="700">
    <v-layout column align-center justify-center>
      <h1 class="white--text">ShoppingCart</h1>
      <h4 class="white--text">Build your application today!</h4>

      <div>
        <v-btn primary light class="btn--light-flat-pressed z-depth-2">Login</v-btn>
      </div>
    </v-layout>
  </v-parallax>

 <!--  <div class="login">
    <p v-if='$route.query.redirect'>
      You need to login first!
    </p>
    <form @submit.preent="onLogin">
      <label for="email">
        <input type="email" v-model="email" placeholder="email">
      </label>
      <label for="password">
        <input type="password" v-model="password" placeholder="password">
      </label>

      <button type="submit" name="button">Login</button>

      <p v-if="error" class="error">Bad login information</p>
    </form>
  </div> -->
</template>

<script>
// import auth from '../auth'
// export default {
//   data () {
//     return {
//       email: '',
//       password: '',
//       error: false
//     }
//   },
//   methods: {
//     onLogin: function () {
//       auth.login(this.email, this.password, loggedIn => {
//         if (!loggedIn) {
//           this.error = true
//         } else {
//           this.$router.replace(this.$route.query.redirect || '/')
//         }
//       })
//     }
//   }
// }
</script>
