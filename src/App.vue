<template>
  <v-app id="app">
    <!-- navigation bar -->
    <v-navigation-drawer
      persistent
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          v-for="(page, i) in pages"
          :key="i">

          <v-list-tile value="true" router :to="page.to">
            <v-list-tile-action>
              <v-icon light v-html="page.icon" class=""></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="page.title"></v-list-tile-title>
            </v-list-tile-content>            
          </v-list-tile>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- main contents -->
    <v-toolbar v-if=showheader>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <main>

      <router-view></router-view>

<!--   <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container> -->
    </main>
<!--     <v-footer>
      <span>&copy; 2017 jacoyutorius</span>
    </v-footer> -->
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        showheader: true,
        drawer: true,
        pages: [
          { icon: "home", to: "/",  title: "Home"},
          { icon: 'account_circle', to: "/about", title: 'About' },
          { icon: 'shop', to: "/items", title: 'Items' },
          { icon: 'shopping_cart', to: "/order", title: 'Order' },
          { icon: 'exit_to_app', to: "/logout", title: 'Logout' },
          { icon: 'exit_to_app', to: "/login", title: 'Login' },
        ],
        title: 'Vue ShoppingCart'
      }
    },
    methods: {
      toggeleHeader: function(e){
        this.showheader = !this.showheader;
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

<style type="text/css">
  #app {
    /*background: #424242*/
  }
</style>
