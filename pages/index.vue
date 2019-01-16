<template>
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

</template>

<script>
import HomeToolbar from '../components/HomeToolbar'
import HomeBookingCard from '../components/HomeBookingCard'

export default {
  components: {
    HomeBookingCard,
    HomeToolbar
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
