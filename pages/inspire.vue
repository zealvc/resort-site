<template>
  <v-layout class="ma-5">
    <card-item-with-price
      type="Private Room"
      title="Khmer Cottage"
      price="$9"
      img-src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      go-to-link="/inspire"
    />
  </v-layout>
</template>
<script>
import CardItemWithPrice from '../components/CardItemWithPrice'
export default {
  components: { CardItemWithPrice }
}
</script>
