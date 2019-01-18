<template>
  <div>
    <v-layout xs12>
      <v-card
        color="#033"
        width="100%"
        height="50">
        <div class="datepicker-trigger">
          <input
            id="datepicker-trigger"
            :value="formatDates(dateOne, dateTwo)"
            type="text"
            placeholder="Select dates"
          >
          <AirbnbStyleDatepicker
            :trigger-element-id="'datepicker-trigger'"
            :mode="'range'"
            :fullscreen-mobile="true"
            :date-one="dateOne"
            :date-two="dateTwo"
            @date-one-selected="val => { dateOne = val }"
            @date-two-selected="val => { dateTwo = val }"
          />
        </div>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
// import format from 'date-fns/format'

export default {
  data() {
    return {
      dateFormat: 'D MMM',
      dateOne: '',
      dateTwo: ''
    }
  },
  methods: {
    formatDates(dateOne, dateTwo) {
      let formattedDates = ''
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat)
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat)
      }
      return formattedDates
    }
  }
}
</script>
