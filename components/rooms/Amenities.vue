<template>
  <div>
    <span class="subheading font-weight-bold">Amenities</span>
    <v-container
      grid-list-sm
      px-0>
      <v-layout
        row
        wrap>
        <v-flex
          v-for="(item, i) in items"
          :key="i">
          <v-icon size="16px">{{ item.icon }}</v-icon>
          <span class="text-capitalize">{{ item.title }}</span>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
          pt-3
          xs12>
          <a
            class="font-weight-bold subheading"
            @click="dialog = true">
            Show all amenities
          </a>
        </v-flex>
        <v-dialog
          v-resize="onResize"
          v-model="dialog"
          :fullscreen="isMobile"
          :hide-overlay="false"
          max-width="500"
          class="background-color: red">
          <v-card>
            <v-card-actions>
              <v-icon
                size="30px"
                color="grey"
                @click="dialog = false"
              >
                close
              </v-icon>
            </v-card-actions>
            <v-card-title class="headline font-weight-bold">Amenities</v-card-title>
            <v-card-title class="subheading font-weight-bold">Basic</v-card-title>
            <v-card-text>
              <span class="text-capitalize">wifi</span>
              <v-divider class="mt-3"/>
            </v-card-text>
            <v-card-text>
              <span class="text-capitalize">Kitchen</span>
              <v-divider class="mt-3"/>
            </v-card-text>
            <v-card-text>
              <span class="text-capitalize">Kitchen</span>
              <v-divider class="mt-3"/>
            </v-card-text>
            <v-card-text>
              <span class="text-capitalize">Kitchen</span>
              <v-divider class="mt-3"/>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-divider/>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Amenities',
  data: () => ({
    isMobile: false,
    dialog: false,
    items: [
      { icon: 'wifi', title: 'wifi' },
      { icon: 'fas fa-utensils', title: 'kitchen' },
      { icon: 'wifi', title: 'wifi' },
      { icon: 'wifi', title: 'wifi' },
      { icon: 'wifi', title: 'wifi' },
      { icon: 'wifi', title: 'wifi' },
      { icon: 'wifi', title: 'wifi' },
      { icon: 'wifi', title: 'wifi' },
      { icon: 'wifi', title: 'wifi' },
      { icon: 'wifi', title: 'wifi' }
    ]
  }),
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },

  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600
    }
  }
}
</script>

<style scoped>
a {
  color: #00838f; /*cyan darken-3*/
}
a:hover {
  text-decoration: underline;
}
</style>
