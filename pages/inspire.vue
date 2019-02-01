<template>
  <v-layout class="ma-5">
    <toolbar-search-box placeholder="Hello"/>
  </v-layout>
</template>
<script>
import CardItemWithPrice from '../components/CardItemWithPrice'
import ChipButton from '../components/ChipButton'
import ToolbarSearchBox from '../components/ToolbarSearchBox'
export default {
  components: { ToolbarSearchBox, ChipButton, CardItemWithPrice }
}
</script>
