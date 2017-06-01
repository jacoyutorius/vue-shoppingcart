<template>
  <v-app id="app">
    <!-- navigation bar -->
    <v-navigation-drawer
      persistent
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i">

          <v-list-tile value="true" router :to="item.to">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>            
          </v-list-tile>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- main contents -->
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <!-- contents -->
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </main>
    <v-footer>
      <span>&copy; 2017 jacoyutorius</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { icon: "bubble_chart", to: "/",  title: "Main"},
          { icon: 'bubble_chart', to: "about", title: 'About' },
          { icon: 'bubble_chart', to: "items", title: 'Items' },
          { icon: 'bubble_chart', to: "order", title: 'Order' },
        ],
        title: 'Vue ShoppingCart'
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
