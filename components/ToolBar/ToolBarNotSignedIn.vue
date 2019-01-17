<template>
  <div>
    <v-toolbar
      color="#FFFFFF"
      height="80">
      <v-img color="">
        <a href="/">
          <img
            :src="logo.src"
            :alt="logo.alt"
            width="50px"
          >
        </a>
      </v-img>
      Tool Bar - Not Singed In
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          v-for="data in buttons"
          :key="data.id"
          :href="data.url"
          flat
          color = "primary"
        >
          {{ data.name }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    logo: {
      alt: 'vKiriromlogo',
      src: 'https://www.vkirirom.com/images/About_Company/vKirirom.png'
    },
    buttons: [
      {
        name: 'Become a host',
        url: 'https://www.vkirirom.com/images/About_Company/vKirirom.png'
      },
      { name: 'Help', url: '#' },
      { name: 'Sign up', url: '#' },
      { name: 'Log in', url: '#' }
    ]
  })
}
</script>

<style>
</style>
