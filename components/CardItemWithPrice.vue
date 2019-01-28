<template>
  <v-card
    :to="goToLink"
    flat
    ripple
    nuxt="true"
  >
    <v-img
      :src="imgSrc"
      aspect-ratio="1.7"
      class="elevation-1 card-item-img"
    />
    <v-card-title class="pl-0 pb-0">
      <div
        v-show="type!==''"
        class="v-list__tile__sub-title body-2 font-weight-regular text-capitalize text-truncate card-item-type pb-2">{{ type }}</div>
      <div class="title text-capitalize text-truncate pb-2">{{ title }}</div>
      <div
        v-show="price!==0"
        class="v-list__tile__sub-title subheading font-weight-regular text-capitalize text-truncate card-item-price">{{ price }}</div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'CardItemWithPrice',
  props: {
    type: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: '',
      required: false
    },
    goToLink: {
      type: String,
      default: '/',
      required: false
    },
    imgSrc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.card-item-type {
  font-family: Montserrat, serif;
  color: #3d4e61;
}
.title {
  font-family: Montserrat, serif;
  color: #3d4e61;
}
.card-item-price {
  font-family: Montserrat, serif;
  color: #687c94;
}
.card-item-img {
  border-radius: 0;
}
</style>
