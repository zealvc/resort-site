<template>
  <!--TODO: Implement speed dial for persistent fab-->
  <v-footer
    height="auto"
    style="background-color: transparent"
  >

    <v-layout
      justify-end
      row

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

          <v-card-actions
            class="justify-start"
            style="color: #3D4E61;"
          >
            Copyright &copy; vKirirom Pine Resort co.,Ltd. All Rights Reserved.
          </v-card-actions>
        </v-list>


      </v-bottom-sheet>

    </v-layout>


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
