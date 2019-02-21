<template>
  <div>
    <v-layout class="ma-5">
      <toolbar-search-box placeholder="Hello"/>
    </v-layout>
    <div class="headline">Gallery Image Component</div>
    <main-gallery/>
  </div>
</template>
<script>
import CardItemWithPrice from '../components/CardItemWithPrice'
import ChipButton from '../components/ChipButton'
import ToolbarSearchBox from '../components/ToolbarSearchBox'
import MainGallery from '../components/Gallery/MainGallery'
export default {
  components: { MainGallery, ToolbarSearchBox, ChipButton, CardItemWithPrice }
}
</script>
