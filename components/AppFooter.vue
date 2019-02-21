<template>
  <!--TODO: Implement speed dial for persistent fab-->
  <v-footer
    height="auto"
  >
    <v-card
      flat
      tile
      class="flex px-5"
    >
      <v-card-title class="">
        <v-btn
          v-for="item in footerItems"
          :key="item"
          flat
          class="mx-auto text-capitalize pl-0 font-weight-bold"
          style="color: #3D4E61; font-size: 16px; "
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
        class="justify-start pl-3"
        style="color: #3D4E61;"
      >
        Copyright &copy; vKirirom Pine Resort co.,Ltd. All Rights Reserved
        <v-spacer/>
        <v-btn
          :href="href"
          class="pa-0"
          outline
          flat>
          <v-layout>
            <v-flex
              class="pt-3"
              style="padding-bottom: 15px">
              <v-card-media
                :width="cardWidth"
                :src="image"
                height="33px"/>
            </v-flex>
            <v-flex>
              <v-card-title
                primary-title>
                <div>
                  <div class="text-capitalize">English</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-btn>

      </v-card-actions>

    </v-card>
  </v-footer>




</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    category: {
      type: String,
      default: 'category'
    },
    image: {
      type: String,
      default:
        'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Flag_of_the_United_States_Recolored.png/800px-Flag_of_the_United_States_Recolored.png'
    },
    href: {
      type: String,
      default: '#'
    }
  },
  data: () => ({
    sheet: false,
    footerItems: [
      'Accommodations',
      'Restaurants',
      'Activities',
      'Shuttle Bus System'
    ],
    icons: ['fab fa-facebook', 'fab fa-instagram']
  }),
  computed: {
    cardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '70px'
        case 'sm':
          return '70px'
        case 'md':
          return '70px'
        case 'lg':
          return '70px'
        case 'xl':
          return '70px'
      }
    }
  }
}
</script>

<style scoped>
</style>
