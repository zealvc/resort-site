<template>
  <!--TODO: Implement speed dial for persistent fab-->
  <v-footer
    height="auto"
  >
    <v-card
      class="flex  md12"
      flat
      tile
    >
      <v-bottom-sheet
        v-model="sheet">
        <v-btn
          slot="activator"
          class="text-capitalize"
          color="purple"
          dark
        >
          Terms, Privacy, Currency & More
        </v-btn>
        <v-list class="pa-5">
          <v-btn
            v-for="item in footerItems"
            :key="item"
            flat
            class="mx-auto text-capitalize pl-0"
            style="color: #3D4E61; font-size: 16px"

          >
            {{ item }}
          </v-btn>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>

        <v-card-title>
          <v-card-actions
            class="justify-start"
            style="color: #3D4E61;"
          >
            Copyright &copy; vKirirom Pine Resort co.,Ltd. All Rights Reserved.
          </v-card-actions>
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

        </v-card-title>

      </v-sheet>
    </v-card>
  </v-footer>


</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    sheet: false,
    footerItems: ['accommodations', 'Restaurants', 'activities'],
    icons: ['fab fa-facebook', 'fab fa-instagram']
  })
}
</script>

<style scoped>
</style>
