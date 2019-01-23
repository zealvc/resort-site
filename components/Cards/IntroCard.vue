<template>
  <div>
    <div class="px-2">
      <h2>Introducing of Accommodation</h2>
    </div>
    <slick
      ref="slick"
      :options="slickOptions">
      <div
        v-for="card in cards"
        :key="card.id">
        <v-card
          :href="card.href"
          flat
          class="ma-0 rounded-card grey--text text--darken-3"
          style="background-color: transparent">
          <v-layout column>
            <v-flex xs4>
              <v-img
                :src="card.src"
                class="rounded-card"
                height="150px"/>
            </v-flex>
            <v-flex xs8>
              <v-card-title class="px-0">
                <div class="blue-grey--text text--darken-3">
                  <h1 class="body-2 font-weight-thin text-capitalize">Accommodation</h1>
                  <h1 class="title font-weight-bold text-capitalize">{{ card.title }}</h1>
                  <h1 class="subheading font-weight-thin text-lowercase">{{ card.price }}$ per night</h1>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
      </div>
    </slick>
  </div>
</template>

<script>
export default {
  data: () => ({
    slickOptions: {
      dots: false,
      infinite: false,
      slidesToShow: 4,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 415,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }
  })
}
</script>

<style scoped>
.rounded-card {
  border-radius: 3px;
  overflow: hidden;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
  border: 1px solid lightgray;
}
</style>
