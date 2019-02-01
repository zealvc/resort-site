<template>

  <v-menu
    offset-y
  >
    <v-text-field
      slot="activator"
      ref="search"
      v-model="searchQuery"
      :style="[expand ? { width: '500px' } : { width: '300px' }]"
      style="transition: width 0.3s ease-in-out;"
      solo
      placeholder="Search"
      hide-details
      clearable
      clear-icon="clear"
      prepend-inner-icon="search"
      class="elevation-0 hidden-xs-only"
      @focus="expand = true"
      @blur="expand = false"
    />

    <v-card
      v-if="showOptions"
      :style="[expand ? { width: '500px' } : { width: '300px' }]"
      style="transition: width 0.3s ease-in-out;"
      class="elevation-0 pa-3"
    >
      <v-card-title>Explore</v-card-title>
      <v-list>
        <v-btn/>
        <v-btn/>
        <v-btn/>
        <v-btn/>
      </v-list>
    </v-card>
    <v-card
      v-else
      :style="[expand ? { width: '500px' } : { width: '300px' }]"
      style="transition: width 0.3s ease-in-out;"
      class="elevation-0 pa-3"
    >
      <search-result-list/>
    </v-card>
  </v-menu>

</template>

<script>
import SearchResultList from './SearchResultList'
export default {
  name: 'ToolbarSearchBox',
  components: { SearchResultList },
  props: {
    placeholder: {
      type: String,
      default: '',
      required: false
    }
  },
  data: () => ({
    searchQuery: '',
    typing: false,
    expand: false
  }),
  computed: {
    showOptions() {
      return this.searchQuery.length <= 0
    }
  }
}
</script>

<style scoped>
.input-text-field-search >>> input {
  color: #b7c0ca;
}
</style>
