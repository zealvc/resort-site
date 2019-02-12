<template>
  <div>
    <room-details/>
  </div>
</template>

<script>
import ToolBarSignedIn from '~/components/ToolBar/ToolBarSignedIn'
import ToolBarNotSignedIn from '~/components/ToolBar/ToolBarNotSignedIn'
import ImgCollection from '~/components/rooms/ImgCollection'
import BookWindow from '~/components/rooms/BookWindow'
import RoomDetails from '../../../components/rooms/RoomDetails'
export default {
  components: {
    RoomDetails,
    ToolBarSignedIn,
    ToolBarNotSignedIn,
    ImgCollection,
    BookWindow
  }
}
</script>

<style>
</style>
