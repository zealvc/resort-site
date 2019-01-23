<template>
  <div>
    <div>
      <h2>Introducing of Solo Activities</h2>
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
          style="background-color: transparent"
          min-width="267px">
          <v-layout column>
            <v-flex xs4>
              <v-img
                :src="card.src"
                class="rounded-card"
                height="150px"/>
            </v-flex>
            <v-flex xs8>
              <v-card-title class="px-0 py-2">
                <div class="blue-grey--text text--darken-3">
                  <h1 class="body-2 font-weight-thin text-capitalize">Activities</h1>
                  <h1 class="title font-weight-bold text-capitalize">Name of Activity</h1>
                  <h1 class="subheading font-weight-thin text-lowercase">{{ card.price }}$ per person</h1>
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
      variableWidth: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 4
          }
        }
      ]
    },
    cards: [
      {
        title: 'Luxury Tent',
        src:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        price: '80',
        href: '#'
      },
      {
        title: 'Khmer Cottage',
        src:
          'https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG',
        price: '50',
        href: '#'
      },
      {
        title: 'Auto Camping',
        src:
          'https://www.vkirirom.com/images/detailsimage/camping/camping4.JPG',
        price: '30',
        href: '#'
      },
      {
        title: 'Pipe Room',
        src:
          'https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG',
        price: '30',
        href: '#'
      }
    ]
  })
}
</script>

<style scoped>
.rounded-card {
  border-radius: 3px;
  overflow: hidden;
}
</style>
