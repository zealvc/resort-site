<template>
  <div style="padding:0">
    <v-btn
      class="font-weight-bold hidden-sm-and-down"
      style="color: #006a70; margin: 0; box-shadow: none; background-color: transparent; text-transform: none; min-width: 0; padding: 0">
      Show All
      <v-icon>keyboard_arrow_right</v-icon>

    </v-btn>
    <v-btn

      block
      outline
      class="font-weight-bold hidden-md-and-up"
      style="
      color: #006a70; margin: 0;
      box-shadow: none;
      background-color: transparent;
      text-transform: none;
      min-width: 0;
      padding: 0">
      Show All
      <v-icon>keyboard_arrow_right</v-icon>

    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ShowAllButton',
  data: () => ({
    names: [
      'Show All Accommodation',
      'Show All Food & Drinks',
      'Show All Solo Activities'
    ]
  })
}
</script>

<style scoped>
</style>
