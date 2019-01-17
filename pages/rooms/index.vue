<template>
  <div>
    <ToolBarNotSignedIn/>
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
