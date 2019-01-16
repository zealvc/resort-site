<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    height="60px"
    flat
    color="transparent"
    absolute
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
        Sign Up
      </toolbar-item-button>
      <toolbar-item-button>
        Log In
      </toolbar-item-button>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import ToolbarItemButton from '../components/ToolbarItemButton'

export default {
  name: 'HomeToolbar',
  components: {
    ToolbarItemButton
  }
}
</script>

<style scoped>
</style>
