<template>
  <div>
    <v-card>
      <v-card-title>
        <div>
          <span class="headline font-weight-bold">${{ price }}</span>
          <span class="content">per night</span>
          <div class="d-flex">
            <v-rating
              :value="value"
              color="#008489"
              dense
              half-increments
              readonly
              size="14"
            />
            <div class="ml-2 grey--text text--darken-2">
              <span>{{ value }}</span>
              <span>({{ reviews }})</span>
            </div>
          </div>
        </div>
        <v-btn
          icon
          class="mr-0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider/>
      <v-card-title>
        <div>
          <span>Date</span>
          <DateCheckinCheckout/>
        </div>
      </v-card-title>
      <v-card-actions class="justify-center">
        <v-btn
          style="width: 100%; height: 46px"
          class="white--text"
          color="rgb(255, 90, 95)">Request to book</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import DateCheckinCheckout from '~/components/date/DateCheckinCheckout'
export default {
  components: { DateCheckinCheckout },
  data: () => ({
    price: 195,
    reviews: 413,
    value: 4.5
  })
}
</script>
