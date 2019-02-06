<template>
  <v-container
    fluid
  >
    <v-container
      class="blue-grey--text text--darken-3">
      <help-find/>
      <top-rated/>
      <accommodation/>
      <show-all-button/>
      <restaurant/>
      <show-all-button/>
      <activities/>
      <show-all-button/>
      <rental-building/>
    </v-container>
  </v-container>
</template>

<script>
import Accommodation from './Cards/Accommodation'
import TopRated from './TopRated'
import Restaurant from './Cards/Restaurant'
import Activities from './Cards/Activities'
import RentalBuilding from './Cards/RentalBuilding'
import HelpFind from './HelpFind'
import ShowAllButton from './ShowAllButton'
export default {
  name: 'HomeDetails',
  components: {
    HelpFind,
    Activities,
    TopRated,
    Accommodation,
    Restaurant,
    RentalBuilding,
    ShowAllButton
  }
}
</script>

<style scoped>
</style>
