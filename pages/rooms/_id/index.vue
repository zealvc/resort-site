<template>
  <div>
    <ToolBarNotSignedIn/>
    <ImgCollection/>
    <v-container pa-3>
      <v-layout
        row
        wrap
        style="padding-left: 24px; padding-right: 24px">
        <v-flex
          xs8>
          <v-content
            color="green darken-1">
            <RoomDetail/>
          </v-content>
        </v-flex>
        <v-flex
          pa-2
          xs4>
          <BookWindow/>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer/>
  </div>
</template>

<script>
import ToolBarSignedIn from '~/components/ToolBar/ToolBarSignedIn'
import ToolBarNotSignedIn from '~/components/ToolBar/ToolBarNotSignedIn'
import ImgCollection from '~/components/rooms/ImgCollection'
import RoomDetail from '~/components/rooms/RoomDetail'
import BookWindow from '~/components/rooms/BookWindow'
import Footer from '~/components/Footer'
export default {
  components: {
    ToolBarSignedIn,
    ToolBarNotSignedIn,
    ImgCollection,
    RoomDetail,
    BookWindow,
    Footer
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
