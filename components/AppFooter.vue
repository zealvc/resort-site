<template>
  <!--TODO: Implement speed dial for persistent fab-->
  <v-footer
    height="auto"
  >
    <v-card
      class="flex offset-md1 md10"
      flat
      tile
    >
      <v-card-title class="">
        <v-btn
          v-for="item in footerItems"
          :key="item"
          flat
          class="mx-auto text-capitalize pl-0"
          style="color: #3D4E61; font-size: 16px"
        >
          {{ item }}
        </v-btn>
        <v-spacer/>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions 
        class="justify-start" 
        style="color: #3D4E61;"
      >
        Copyright &copy; vKirirom Pine Resort co.,Ltd. All Rights Reserved.
      </v-card-actions>
    </v-card>
  </v-footer>


</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    footerItems: ['accommodations', 'Restaurants', 'activities'],
    icons: ['fab fa-facebook', 'fab fa-instagram']
  })
}
</script>

<style scoped>
</style>
