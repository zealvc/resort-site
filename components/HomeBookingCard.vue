<template>
  <v-card class="pa-4">
    <v-card-text class="booking-card-title">{{ $t('booking_card.title') }}</v-card-text>
    <v-form v-model="booking">
      <v-container>
        <v-layout
          column
          wrap
        >
          <v-flex xs12>
            <booking-card-search-field v-model="booking_query"/>
          </v-flex>
          <v-flex xs12>
            <v-layout
              row
              wrap
              align-center
              justify-center
              text-xs-center
            >
              <v-flex xs6>
                <div class="booking-card-subheading pb-2">{{ $t('booking_card.label_check_in') }}</div>
                <v-menu
                  :close-on-content-click="false"
                  v-model="check_in_date_modal"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >

                  <v-text-field
                    slot="activator"
                    v-model="check_in_date"
                    outline
                    hide-details
                    single-line
                    placeholder="mm/dd/yy"
                    readonly
                    class="input-text-field-slim"
                  />
                  <v-date-picker
                    v-model="check_in_date"
                    color="teal darken-4"
                    @input="check_in_date_modal = false"/>
                </v-menu>
              </v-flex>
              <v-flex xs6>
                <div class="booking-card-subheading pb-2">{{ $t('booking_card.label_check_out') }}</div>
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
                    hide-details
                    single-line
                    placeholder="mm/dd/yy"
                    readonly
                    class="input-text-field-slim"
                  />
                  <v-date-picker
                    v-model="check_out_date"
                    color="teal darken-4"
                    @input="check_out_date_modal = false"/>
                </v-menu>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex x12>
            <div class="booking-card-subheading pb-2">{{ $t('booking_card.label_guest') }}</div>
            <v-menu
              v-model="guest_menu"
              :close-on-content-click="false"
              transition="slide-y-transition"
              bottom
              full-width
            >
              <v-text-field
                slot="activator"
                :placeholder="$t('booking_card.guest_placeholder')"
                v-model="guests_text"
                outline
                single-line
                hide-details
                readonly
                append-icon="keyboard_arrow_down"
                class="input-text-field-slim"
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
          <v-flex xs12>
            <v-layout
              row
              align-center
              justify-end
              fill-height
            >
              <v-btn
                depressed
                large
                class="white--text text-capitalize font-weight-bold"
                color="#006A70"
              >
                Search
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import BookingCardSearchField from './BookingCardSearchField'

export default {
  name: 'HomeBookingCard',
  components: { BookingCardSearchField },
  data: () => ({
    booking: false,
    booking_query: '',
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
.booking-card-title {
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  color: #3d4e61;
}

.input-text-field-slim >>> .v-input__slot {
  border: 1px solid #e1e7ed !important;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px rgba(61, 78, 97, 0.1);
  border-radius: 4px;
}
.input-text-field-slim >>> .v-input__slot:hover {
  /*border: 2px solid #e1e7ed !important;*/
  box-shadow: 4px 4px 4px rgba(61, 78, 97, 0.1);
}
.booking-card-subheading {
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 16px;
  color: #3d4e61;
}
</style>
