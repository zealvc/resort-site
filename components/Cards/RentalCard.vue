<template>
  <div>
    <v-card
      :href="href"
      flat
      class="ma-0 rounded-card grey--text text--darken-3"
      style="background-color: transparent"
      min-width="365px">
      <v-layout column>
        <v-flex xs4>
          <v-img
            :src="image"
            class="rounded-card"
            aspect-ratio="1.7"/>
        </v-flex>
        <v-flex xs8>
          <v-card-title class="px-0 py-2">
            <div class="blue-grey--text text--darken-3">
              <div class="title font-weight-bold text-capitalize">{{ title }}</div>
              <div class="subheading font-weight-thin">{{ info }}</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'RentalCard',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    image: {
      type: String,
      default: '/default_image.png'
    },
    info: {
      type: String,
      default: 'Information'
    }
  }
}
</script>

<style scoped>
.rounded-card {
  border-radius: 3px;
  overflow: hidden;
}
</style>
