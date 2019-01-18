<template>
  <div>
    <v-toolbar
      color="#FFFFFF"
      height="80">
      <div>
        <v-img color="">
          <a href="/">
            <img
              :src="logo.src"
              :alt="logo.alt"
              width="50px"
            >
          </a>
        </v-img>
      </div>
      <div style="width: 460px">
        <Search/>
      </div>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          v-for="data in buttons"
          :key="data.id"
          :href="data.url"
          flat
          color = "primary"
          class="text-capitalize"
        >
          {{ data.name }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import Search from '~/components/search/Search'
export default {
  components: { Search },
  data: () => ({
    logo: {
      alt: 'vKiriromlogo',
      src: 'https://www.vkirirom.com/images/About_Company/vKirirom.png'
    },
    buttons: [{ name: 'Sign up', url: '#' }, { name: 'Log in', url: '#' }]
  })
}
</script>

<style>
</style>
