<template>
  <span>
    <home-hero/>
    <home-details/>
  </span>
</template>

<script>
import HomeToolbar from '../components/HomeToolbar'
import HomeBookingCard from '../components/HomeBookingCard'
import HomeHero from '../components/HomeHero'
import HomeDetails from '../components/HomeDetails'

export default {
  components: {
    HomeDetails,
    HomeHero,
    HomeBookingCard,
    HomeToolbar
  }
}
</script>
<style scoped>
</style>
