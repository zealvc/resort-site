<template>
  <v-card
    class="rounded-card">
    <v-container>
      <div>
        <v-icon class="mb-3">{{ icon }}</v-icon>
      </div>
      <div class="subheading font-weight-bold">Bedroom {{ bedroom_num }}</div>
      <div class="subheading">{{ bedroom_type }}</div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'SleepArrangementsCard',
  props: {
    icon: {
      type: String,
      default: ''
    },
    bedroom_num: {
      type: String,
      default: ''
    },
    bedroom_type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.rounded-card {
  border-radius: 3px;
}
</style>
