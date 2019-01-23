<template>
  <div>
    <div>
      <h2>Introducing of Restaurant</h2>
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
                  <h1 class="body-2 font-weight-thin text-capitalize">Restaurant</h1>
                  <h1 class="title font-weight-bold text-capitalize">Name of Food</h1>
                  <h1 class="subheading font-weight-thin text-lowercase">{{ card.price }}$</h1>
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
          'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg',
        price: '20',
        href: '#'
      },
      {
        title: 'Khmer Cottage',
        src:
          'http://pandagarden.ca/wp-content/uploads/2017/11/chicken-Chow-Mein_1430566912_1644579089.jpg',
        price: '10',
        href: '#'
      },
      {
        title: 'Auto Camping',
        src:
          'https://img.huffingtonpost.com/asset/5b9e98b83c00004c000a9c7c.jpeg?ops=scalefit_720_noupscale',
        price: '15',
        href: '#'
      },
      {
        title: 'Pipe Room',
        src:
          'https://www.worldofbuzz.com/wp-content/uploads/2018/02/pork-belly-featured-image.jpg',
        price: '10',
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
