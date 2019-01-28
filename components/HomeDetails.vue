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
      <solo-activities/>
      <team-activities/>
      <rental-transportation/>
      <rental-building/>
    </v-container>
  </v-container>
</template>

<script>
import Accommodation from './Cards/Accommodation'
import TopRated from './TopRated'
import Restaurant from './Cards/Restaurant'
import SoloActivities from './Cards/SoloActivities'
import TeamActivities from './Cards/TeamActivities'
import RentalTransportation from './Cards/RentalTransportation'
import RentalBuilding from './Cards/RentalBuilding'
import HelpFind from './HelpFind'
export default {
  name: 'HomeDetails',
  components: {
    HelpFind,
    TeamActivities,
    SoloActivities,
    TopRated,
    Accommodation,
    Restaurant,
    RentalTransportation,
    RentalBuilding
  }
}
</script>

<style scoped>
</style>
