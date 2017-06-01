<template lang="html">
  <div class="login">
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
  </div>
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
