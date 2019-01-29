<template>
  <v-btn
    outline
    class="chip-btn subheading text-capitalize"
  >
    <slot/>
  </v-btn>
</template>

<script>
export default {
  name: 'ChipButton'
}
</script>

<style scoped>
.chip-btn {
  font-family: Montserrat, serif;
  border: 1px solid #e1e7ed !important;
  box-sizing: border-box;
  border-radius: 3px;
}
</style>
