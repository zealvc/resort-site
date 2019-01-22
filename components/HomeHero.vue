<template>
  <span>
    <v-container
      fluid
      fill-height
      class="home-hero hidden-sm-and-down"
      style="max-height: 100vh;"
    >
      <v-layout
        justify-start
        align-center
        row
        pa-5
      >
        <v-flex
          md5
          class="offset-md1"
        >
          <home-booking-card/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="hidden-md-and-up">
      <home-booking-card/>
    </v-container>
  </span>
</template>

<script>
import HomeBookingCard from './HomeBookingCard'
export default {
  name: 'HomeHero',
  components: { HomeBookingCard }
}
</script>

<style scoped>
.home-hero {
  background: url('http://source.unsplash.com/0BhSKStVtdM');
  background-size: cover;
  width: 100%;
  height: 100%;
  margin-top: -60px;
  padding-top: 60px;
}
</style>
