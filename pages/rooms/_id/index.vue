<template>
  <div>
    <ToolBarNotSignedIn/>
    <ImgCollection/>
    <v-container pa-3>
      <v-layout
        row
        wrap>
        <v-flex
          pa-2
          md8
          sm12
          xs12>
          <v-content>
            <RoomDetail/>
          </v-content>
        </v-flex>
        <v-flex
          pa-2
          md4
          sm12
          xs12>
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
