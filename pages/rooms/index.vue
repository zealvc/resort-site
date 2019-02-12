<template>
  <div>
    <ToolBarNotSignedIn/>
    <div class="headline">Welcome to Accommodation Page</div>
    <v-btn
      to="/rooms/1"
      color="blue">Go To A Room</v-btn>
  </div>
</template>

<script>
import ToolBarSignedIn from '~/components/ToolBar/ToolBarSignedIn'
import ToolBarNotSignedIn from '~/components/ToolBar/ToolBarNotSignedIn'
import TabbedSearch from '~/components/TabbedSearch'

export default {
  components: {
    ToolBarSignedIn,
    ToolBarNotSignedIn,
    TabbedSearch
  },

  data: function() {
    return {
      items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
  }
}
</script>

<style>
</style>
