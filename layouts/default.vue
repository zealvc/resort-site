<template>
  <v-app>
    <app-navigation/>
    <v-content transition="slide-x-transition">
      <nuxt/>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import ToolbarItemButton from '../components/ToolbarItemButton'
import AppNavigation from '../components/AppNavigation'
import AppFooter from '../components/AppFooter'

export default {
  components: { AppFooter, AppNavigation, ToolbarItemButton },
  data() {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>
<style scoped>
</style>
