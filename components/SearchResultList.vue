<template>
  <v-list>
    <v-list-tile 
      v-for="item in items" 
      :key="item.title">
      <v-list-tile-content>{{ item.title }}</v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'SearchResultList',
  data() {
    return {
      items: [
        {
          icon: true,
          title: 'Jason Oner',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
        },
        {
          title: 'Travis Howard',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
        },
        {
          title: 'Ali Connors',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
        },
        {
          title: 'Cindy Baker',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
