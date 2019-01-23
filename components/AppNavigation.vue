<template>
  <span>
    <v-navigation-drawer 
      v-model="drawer" 
      app 
      class="white"
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"/>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      height="60px"
      flat
      app
      dark
      color="transparent"
      scroll-off-screen
      scroll-threshold="1"
    >
      <v-toolbar-side-icon 
        v-show="false"
        class="hidden-md-and-up"
        @click="drawer = !drawer"/>
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
          {{ $t('message.sign_up') }}
        </toolbar-item-button>
        <toolbar-item-button>
          {{ $t('message.sign_in') }}
        </toolbar-item-button>
      </v-toolbar-items>
    </v-toolbar>
  </span>
</template>

<script>
import ToolbarItemButton from './ToolbarItemButton'
export default {
  name: 'AppNavigation',
  components: { ToolbarItemButton },
  data() {
    return {
      drawer: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
