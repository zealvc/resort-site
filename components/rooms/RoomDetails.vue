<template>
  <v-app class="grey lighten-5 blue-grey--text text--darken-1a">
    <ImgCollection/>
    <v-layout>
      <v-flex 
        xs12 
        sm8
        offset-sm2>
        <v-card>
          <v-container 
            grid-list-sm 
            fluid>
            <v-layout 
              row 
              wrap>
              <v-flex
                class="text-uppercase"
                xs12>
                <div>Entire Room</div>
              </v-flex>
              <v-flex
                class="display-1 font-weight-bold text-capitalize"
                xs12>
                <div>'Silo Studio' Cottage</div>
              </v-flex>
              <v-flex
                class="font-weight-bold my-3"
                xs12>
                <guests-require/>
              </v-flex>
              <v-flex><v-divider/></v-flex>
              <v-flex
                my-3
                xs12>
                <div class="subheading font-weight-bold">The space</div>
                <v-content class="my-3">
                  Now open year-round! Charming, One Bedroom Cottage, former sculpting studio on the Santarella Estate in Tyringham, MA. Known as the "Silo Studio" Cottage. There is a bedroom with canopied queen bed upstairs and a sitting room with window bench-seat, coffee table, table and chairs, kitchenette area with wet bar with Micro/Fridge coffeemaker, toaster and bathroom with shower are downstairs. Fall asleep to sounds of the babbling brook and views to pond and forest from the large screened openings upstairs, like living in a "tree-house". Accommodates two only, fully furnished, all linens, towels included. There is Satellite DTV and Wireless Internet on site. The cottage is situated on four acres including lovely gardens, beautiful lily pond, running brooks and 2 acre woods. Absolutely unique, one-of-a-kind experience!
                  Please Note, the cottage has traditionally been a three season rental from approximately March- November, however, due to much interest and demand, we have recently added a larger capacity pellet stove and made winterizing efforts and plan on keeping it open for guests interested in a winter experience in the cottage! Please keep in mind that access to our grounds may be limited with the accumulation of snow in winter months. During predicted extreme weather events, we will gladly work with guests to change reservations as we are always concerned for their comfort!
                </v-content>
              </v-flex>
              <v-flex><v-divider/></v-flex>
              <v-flex
                my-3
                xs12>
                <amenities/>
              </v-flex>
              <v-flex><v-divider/></v-flex>
              <v-flex
                my-3
                xs12>
                <div class="subheading font-weight-bold">Sleep arrangements</div>
                <v-container
                  grid-list-lg
                  px-0>
                  <v-layout
                    row
                    wrap>
                    <v-flex
                      v-for="(bed, i) in bedroom"
                      :key="i"
                      xs6
                      md3>
                      <sleep-arrangements-card
                        :icon="bed.icon"
                        :bedroom_num="bed.bedroom_num"
                        :bedroom_type="bed.bedroom_type"/>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex><v-divider/></v-flex>
              <v-flex
                my-3
                xs12>
                <div class="subheading font-weight-bold text-capitalize">Availability</div>
                <div class="subheading">Update 3 day ago</div>
              </v-flex>
              <v-flex><v-divider/></v-flex>
              <v-flex
                my-3
                xs12>
                <div class="headline font-weight-bold text-capitalize">Policies</div>
                <div class="subheading font-weight-bold my-1">Villa Rule</div>
                <div class="subheading my-1">No smoking</div>
              </v-flex>
              <v-flex><v-divider/></v-flex>
              <v-flex
                my-3
                xs12>
                <div class="subheading font-weight-bold text-capitalize">Cancellations</div>
                <div class="subheading font-weight-bold my-1">Moderate</div>
                <div class="subheading my-1">If cancelled, modified or in case of no-show, the first night will be charged.</div>
                <v-flex
                  pt-3
                  xs12>
                  <a
                    class="font-weight-bold subheading"
                    @click="dialog = true">
                    Read more about the policy
                  </a>
                  <v-icon
                    size="20px"
                    color="#00838f">fas fa-angle-down</v-icon>
                </v-flex>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import GuestsRequire from './GuestsRequire'
import ImgCollection from './ImgCollection'
import Amenities from './Amenities'
import SleepArrangementsCard from './SleepArrangementsCard'
export default {
  name: 'RoomDetails',
  components: {
    SleepArrangementsCard,
    Amenities,
    ImgCollection,
    GuestsRequire
  },
  data: () => ({
    bedroom: [
      { icon: 'fas fa-bed', bedroom_num: '1', bedroom_type: '2 double beds' },
      { icon: 'fas fa-bed', bedroom_num: '1', bedroom_type: '2 single beds' },
      { icon: 'fas fa-bed', bedroom_num: '1', bedroom_type: '2 single beds' },
      { icon: 'fas fa-bed', bedroom_num: '1', bedroom_type: '2 single beds' },
      { icon: 'fas fa-bed', bedroom_num: '1', bedroom_type: '2 single beds' },
      { icon: 'fas fa-bed', bedroom_num: '1', bedroom_type: '2 single beds' },
      { icon: 'fas fa-bed', bedroom_num: '1', bedroom_type: '2 single beds' },
      { icon: 'fas fa-bed', bedroom_num: '1', bedroom_type: '2 single beds' },
      { icon: 'fas fa-bed', bedroom_num: '1', bedroom_type: '2 single beds' },
      { icon: 'fas fa-bed', bedroom_num: '1', bedroom_type: '2 single beds' }
    ]
  })
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
