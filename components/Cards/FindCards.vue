<template>
  <div>
    <v-card
      :href="href"
      :width="cardWidth"
      flat
      class="card ma-0 rounded-card">
      <v-layout
        :column="$vuetify.breakpoint.xs"
      >
        <v-flex xs4>
          <v-card-media
            :src="image"
            height="75px"/>
        </v-flex>
        <v-flex xs8>
          <v-card-title primary-title>
            <div class="blue-grey--text text--darken-3">
              <div class="subheading font-weight-bold text-capitalize">{{ category }}</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'FindCard',
  props: {
    category: {
      type: String,
      default: 'category'
    },
    image: {
      type: String,
      default: '/default_image.png'
    },
    href: {
      type: String,
      default: '#'
    }
  },
  computed: {
    cardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '150px'
        case 'sm':
          return '250px'
        case 'md':
          return '250px'
        case 'lg':
          return '250px'
        case 'xl':
          return '250px'
      }
    }
  }
}
</script>

<style scoped>
.rounded-card {
  border-radius: 3px;
  overflow: hidden;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;
  border: 1px solid lightgray;
}
</style>
