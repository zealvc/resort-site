<template>
  <v-container
    grid-list-sm
    fluid
    pa-0>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="(item, i) in items"
        :key="i"
        xs6
        sm3
        md2>
        <v-icon
          color="black"
          size="16px">{{ item.icon }}</v-icon>
        <span class="text-lowercase">{{ item.title }}</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'GuestsRequire',
  data: () => ({
    items: [
      { icon: 'fas fa-users', title: 'guests' },
      { icon: 'fas fa-door-open', title: 'bedroom' },
      { icon: 'fas fa-bed', title: 'bed' },
      { icon: 'fas fa-bath', title: 'bath' }
    ]
  })
}
</script>

<style>
</style>
