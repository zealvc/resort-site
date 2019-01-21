<template>
  <v-text-field
    :placeholder="$t('booking_card.search_placeholder')"
    outline
    single-line
    prepend-inner-icon="search"
    clearable
    hide-details
    color="#687C94"
    clear-icon="clear"
    class="input-text-field-slim"
  />
</template>

<script>
export default {
  name: 'BookingCardSearchField'
}
</script>

<style scoped>
.input-text-field-slim >>> input {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 16px;
  color: #b7c0ca;
}
</style>
