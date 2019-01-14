<template>
  <v-app>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      height="60px"
      flat
      color="white"
      app
      fixed
    >
      <v-btn
        icon
        large>
        <v-avatar
          size="40px"
          tile>
          <img
            src="/vkirirom_logo.svg"
            alt="">
        </v-avatar>
      </v-btn>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <toolbar-item-button>
          Help
        </toolbar-item-button>
        <toolbar-item-button>
          Sign Up
        </toolbar-item-button>
        <toolbar-item-button>
          Log In
        </toolbar-item-button>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer
      height="auto"
      app
    >
      <v-avatar
        size="42px"
        tile
      >
        <img
          src="/vkirirom_logo.svg"
          alt="">
      </v-avatar>
      <span>&copy; vKirirom Pine Resort, co.Ltd</span>
    </v-footer>
  </v-app>
</template>

<script>
import ToolbarItemButton from '../components/ToolbarItemButton'

export default {
  components: { ToolbarItemButton },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
