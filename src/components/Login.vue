<template lang="html">

  <!-- 背景 -->
  <v-parallax src="/static/doc-images/IMG_7088.jpg" height="700">
    <v-layout column align-center justify-center>
      <h2 class="white--text">ShoppingCart</h2>
      <h4 class="white--text">Build your application today!</h4>

      <!-- 認証フォーム -->
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 md6 offset-md3>

            <v-alert dismissible v-if="error" error v-bind:value="true" v-on:click.native="error = false">
              認証に失敗しました
            </v-alert>          
            <v-alert v-if='$route.query.redirect' warning v-bind:value="true">
              コンテンツを閲覧するにはログインが必要です
            </v-alert>

            <v-card>
              <v-card-text>
                <span class="title">ログイン</span>
                <small>*は必須項目です。</small>

                <v-text-field
                  label="Eメールアドレス"
                  v-model="email"
                  required
                ></v-text-field>
                <v-text-field
                  label="パスワード"
                  persistent-hint
                  type="password"
                  v-model="password"
                  required
                ></v-text-field>
                <div class="text-xs-center">
                  <v-btn outline primary light class="btn--light-flat-pressed z-depth-2" v-on:click.native="onLogin">ログイン</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </v-layout>
  </v-parallax>
</template>

<script>
import auth from '../auth'
export default {
  data () {
    return {
      email: 'jacoyutorius@gmail.com',
      password: "",
      error: false
    }
  },
  methods: {
    onLogin: function () {
      auth.login(this.email, this.password, loggedIn => {
        // alert(this.$parent.loggedIn);
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace('/')
        }
      })
    }
  }
}
</script>
