<template>
  <v-layout class="ma-5">
    <card-item-with-price
      type="Private Room"
      title="Khmer Cottage"
      price="$9"
      img-src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      go-to-link="/inspire"
    />
    <chip-button>Guests</chip-button>
  </v-layout>
</template>
<script>
import CardItemWithPrice from '../components/CardItemWithPrice'
import ChipButton from '../components/ChipButton'
export default {
  components: { ChipButton, CardItemWithPrice }
}
</script>
