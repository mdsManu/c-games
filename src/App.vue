<template>
  <v-app dark>
    <v-navigation-drawer temporary v-model="sideNav" fixed>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.tile" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dense app fixed class="primary">
      <v-toolbar-side-icon @click.native="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">C-Games</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
          {{ item.title }}
          <v-icon right>{{ item.icon }}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main class="mt-5">
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,

      menuItems: [
        { icon: '', title: 'All Games', link: '/games' },
        { icon: '', title: 'New Cracks', link: '/games' },
        { icon: '', title: 'Add Game', link: '/games/new' },
        { icon: 'person', title: '', link: '/person' },
        { icon: 'face', title: 'Sign Up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign In', link: '/signin' }
      ]
    }
  },
  name: 'App'
}
</script>
