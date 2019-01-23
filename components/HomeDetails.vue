<template>
  <v-container
    fluid
  >
    <v-container
      class="blue-grey--text text--darken-3">
      <find-cards/>
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
import FindCards from './Cards/FindCards'
import TopRated from './Cards/TopRated'
import Restaurant from './Cards/Restaurant'
import SoloActivities from './Cards/SoloActivities'
import TeamActivities from './Cards/TeamActivities'
import RentalTransportation from './Cards/RentalTransportation'
import RentalBuilding from './Cards/RentalBuilding'
export default {
  name: 'HomeDetails',
  components: {
    TeamActivities,
    SoloActivities,
    TopRated,
    FindCards,
    Accommodation,
    Restaurant,
    RentalTransportation,
    RentalBuilding
  }
}
</script>

<style scoped>
</style>
