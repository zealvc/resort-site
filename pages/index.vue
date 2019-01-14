<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      xs12
      md5
      fill-height
    >
      <v-card class="pl-5 pr-5 pt-3 pb-3">
        <v-card-text class="title">Book accommodations and activities.</v-card-text>
        <v-form>
          <v-container>
            <v-layout
              column
            >
              <v-layout
                row
                wrap
                align-center
                justify-center
              >
                <v-flex
                  xs12
                >
                  <v-text-field
                    outline
                    single-line
                    prepend-inner-icon="search"
                    placeholder="Meeting at vKirirom"
                  />
                </v-flex>
              </v-layout>
              <v-layout
                row
                wrap
                align-center
                justify-center
                text-xs-center
              >
                <v-flex
                  xs6
                >
                  <div class="subheading pb-2 blue-grey--text text--darken-4">Check In</div>
                  <v-text-field
                    outline
                    single-line
                    placeholder="mm/dd/yy"
                    class="pr-1"
                  />
                </v-flex>
                <v-flex
                  xs6
                >
                  <div class="subheading pb-2 blue-grey--text text--darken-4">Check Out</div>
                  <v-text-field
                    outline
                    single-line
                    placeholder="mm/dd/yy"
                    class="pl-1"
                  />
                </v-flex>
              </v-layout>
              <v-layout
                row
                wrap
                align-center
                justify-center
              >
                <v-flex
                  xs12>
                  <div class="subheading pb-2 blue-grey--text text--darken-4">Guests</div>
                  <v-select
                    label="Guests"
                    outline
                  />
                </v-flex>
              </v-layout>
              <v-layout
                row
                wrap
                align-center
                justify-end>
                <v-btn
                  depressed
                  large
                  class="white--text text-capitalize"
                  color="#7085F6"
                >
                  Search
                </v-btn>
              </v-layout>
            </v-layout>
          </v-container>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
