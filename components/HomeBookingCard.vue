<template>
  <v-card class="pa-4">
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
                color="primary"
                outline
                single-line
                prepend-inner-icon="search"
                placeholder="Meeting at vKirirom"
                clearable
                clear-icon="clear"
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
              <v-dialog
                ref="check_in_date_dialog"
                v-model="check_in_date_modal"
                :return-value.sync="check_in_date"
                persistent
                lazy
                full-width
                width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="check_in_date"
                  placeholder="mm/dd/yy"
                  readonly
                  single-line
                  outline
                  class="pr-1 align-center"
                />
                <v-date-picker
                  v-model="check_in_date"
                  scrollable
                  color="teal darken-4"
                >
                  <v-spacer/>
                  <v-btn 
                    flat
                    @click="check_in_date_modal = false">Cancel</v-btn>
                  <v-btn 
                    depressed
                    color="teal darken-4"
                    @click="$refs.check_in_date_dialog.save(check_in_date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
            </v-flex>
            <v-flex
              xs6
            >
              <div class="subheading pb-2 blue-grey--text text--darken-4">Check Out</div>
              <v-menu
                :close-on-content-click="false"
                v-model="check_out_date_modal"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >

                <v-text-field
                  slot="activator"
                  v-model="check_out_date"
                  outline
                  single-line
                  placeholder="mm/dd/yy"
                  readonly
                />
                <v-date-picker
                  v-model="check_out_date"
                  color="teal darken-4"
                  @input="check_out_date_modal = false"/>
              </v-menu>
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
              <v-menu
                v-model="guest_menu"
                :close-on-content-click="false"
                transition="slide-y-transition"
                bottom
                full-width
              >
                <v-text-field
                  slot="activator"
                  v-model="guests_text"
                  outline
                  single-line
                  placeholder="Guests"
                  readonly
                  append-icon="keyboard_arrow_down"
                />

                <v-list>
                  
                  <v-list-tile
                    v-for="(item, i) in guest_categories"
                    :key="i"
                  >
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title" />
                      <v-list-tile-sub-title v-html="item.subtitle" />
                    </v-list-tile-content>
                    <v-spacer/>
                    <v-list-tile-action>
                      <v-layout
                        row
                        align-center
                        justify-space-around
                      >
                        <v-flex>
                          <v-btn
                            outline
                            fab
                            small
                            color="teal darken-4"
                            @click="removeGuest(i)"
                          >
                            <v-icon>remove</v-icon>
                          </v-btn>
                        </v-flex>
                        <v-flex>
                          <div class="pl-2 pr-2">{{ item.amount }}</div>
                        </v-flex>
                        <v-flex>
                          <v-btn
                            outline
                            fab
                            small
                            color="teal darken-4"
                            @click="addGuest(i)">
                            <v-icon>add</v-icon>
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile>
                    <v-spacer/>
                    <v-list-tile-action>
                      <v-btn 
                        flat 
                        color="teal darken-4"
                        class="text-capitalize"
                        @click="renderGuestNumber"
                      >Apply</v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>

              </v-menu>
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
</template>

<script>
import { VTextField } from 'vuetify'
export default {
  name: 'HomeBookingCard',
  data: () => ({
    check_in_date: new Date().toISOString().substr(0, 10),
    check_out_date: new Date().toISOString().substr(0, 10),
    check_in_date_modal: false,
    check_out_date_modal: false,
    guest_menu: false,
    guest_categories: [
      {
        title: 'Adults',
        amount: 0
      },
      {
        title: 'Children',
        subtitle: 'Ages 2-12',
        amount: 0
      },
      {
        title: 'Infants',
        subtitle: 'Under 2',
        amount: 0
      }
    ],
    guests_text: ''
  }),
  computed: {},
  watch: {},
  methods: {
    addGuest: function(index) {
      this.guest_categories[index].amount += 1
      if (
        (index === 1 || index === 2) &&
        this.guest_categories[index - 1].amount === 0
      ) {
        this.guest_categories[index - 1].amount += 1
      }
    },
    removeGuest: function(index) {
      this.guest_categories[index].amount -= 1
    },
    renderGuestNumber: function() {
      this.guests_text =
        this.guest_categories[0].amount +
        this.guest_categories[1].amount +
        ' guest(s)'
      if (this.guest_categories[2].amount > 0) {
        this.guests_text =
          this.guests_text +
          ', ' +
          this.guest_categories[2].amount +
          'infant(s)'
      }
      this.guest_menu = false
    }
  }
}
</script>

<style scoped>
</style>
