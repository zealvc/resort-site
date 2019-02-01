<template>
  <div>
    <v-card
      :href="href"
      flat
      class="rounded-card"
      min-width="171px">
      <v-layout column>
        <v-flex>
          <v-img
            :src="image"
            height="240px">
            <v-layout
              align-end
              fill-height>
              <v-flex>
                <v-card
                  style="padding-top:70%; background: transparent; background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%) !important;">
                  <v-card-text class="px-2 grey--text text--lighten-3">
                    <div class="body-2 font-weight-thin text- capitalize">{{ category }}</div>
                    <div class="title font-weight-bold text-capitalize">{{ title }}</div>
                    <div class="subheading font-weight-thin text-lowercase">${{ price }} {{ per }}</div>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-img>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'TopRatedCard',
  props: {
    category: {
      type: String,
      default: 'category'
    },
    title: {
      type: String,
      default: 'title'
    },
    image: {
      type: String,
      default: '/default_image.png'
    },
    price: {
      type: String,
      default: '0'
    },
    per: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: '#'
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
