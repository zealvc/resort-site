<template>
  <v-container
    fluid
  >
    <v-container
      class="blue-grey--text text--darken-3">
      <help-find/>
      <top-rated/>
      <accommodation/>
      <restaurant/>
      <activities/>
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
export default {
  name: 'HomeDetails',
  components: {
    HelpFind,
    Activities,
    TopRated,
    Accommodation,
    Restaurant,
    RentalBuilding
  }
}
</script>

<style scoped>
</style>
