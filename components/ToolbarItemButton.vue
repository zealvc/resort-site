<template>
  <v-btn 
    flat 
    class="toolbar-item-text text-capitalize white--text">
    <slot/>
  </v-btn>
</template>

<script>
export default {
  name: 'ToolbarItemButton'
}
</script>

<style scoped>
.toolbar-item-text {
  font-size: 16px;
  font-weight: bold;
  color: #e7f2ed;
}
</style>
