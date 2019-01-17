<template>
  <div>
    <v-parallax
      :style="{height: windowHeight + 'px'}"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"/>

  </div>
</template>

<script>
export default {
  data: () => ({
    windowHeight: window.innerHeight
  }),

  mounted() {},

  methods: {}
}
</script>

<style>
</style>
