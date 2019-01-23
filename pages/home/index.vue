<template>
  <div>
    <div>
      <v-container
        fluid
        fill-height
        class="home-hero">
        <v-layout
          column
        >
          <v-flex>
            <home-toolbar/>
          </v-flex>
          <v-layout
            row
          >
            <v-flex
              md4
              class="offset-md1 pa-3"
            >
              <home-booking-card/>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container class="blue-grey--text text--darken-3">
        <div class="pb-2">
          <find-cards/>
        </div>
        <div class="pb-2">
          <top-rated/>
        </div>
        <div class="pb-2">
          <accommodation/>
        </div>
        <div class="pb-2">
          <restaurant/>
        </div>
        <div class="pb-2">
          <solo-activities/>
        </div>
        <div class="pb-2">
          <rental-transportation/>
        </div>
        <div class="pb-2">
          <rental-building/>
        </div>
      </v-container>
      <top-rated/>
    </div>
  </div>
</template>

<script>
import HomeToolbar from '~/components/HomeToolbar'
import HomeBookingCard from '~/components/HomeBookingCard'
import FindCards from '~/components/Cards/FindCards'
import TopRated from '~/components/Cards/TopRated'
import Accommodation from '~/components/Cards/Accommodation'
import Restaurant from '~/components/Cards/Restaurant'
import SoloActivities from '~/components/Cards/SoloActivities'
import TeamActivities from '~/components/Cards/TeamActivities'
import RentalTransportation from '~/components/Cards/RentalTransportation'
import RentalBuilding from '~/components/Cards/RentalBuilding'

export default {
  components: {
    HomeBookingCard,
    HomeToolbar,
    FindCards,
    TopRated,
    Accommodation,
    Restaurant,
    SoloActivities,
    TeamActivities,
    RentalTransportation,
    RentalBuilding
  }
}
</script>
<style scoped>
.home-hero {
  background: url('http://source.unsplash.com/0BhSKStVtdM');
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
