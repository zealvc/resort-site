<template>
  <div>
    <div>
      <h2>What can we help you to find?</h2>
    </div>
    <v-flex>
      <slick
        ref="slick"
        :options="slickOptions">
        <div
          v-for="card in cards"
          :key="card.id">
          <v-card
            :href="card.href"
            hover="true"
            class="card ma-0 rounded-card"
            width="225px">
            <v-layout
              :column="$vuetify.breakpoint.xs"
            >
              <v-flex xs4>
                <v-card-media
                  :src="card.src"
                  height="75px"/>
              </v-flex>
              <v-flex xs8>
                <v-card-title primary-title>
                  <div class="blue-grey--text text--darken-3">
                    <h3 class="font-weight-bold">{{ card.title }}</h3>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </div>
      </slick>
    </v-flex>
  </div>
</template>

<script>
export default {
  data: () => ({
    slickOptions: {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      adaptiveHeight: true,
      variableWidth: true,

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
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    },
    cards: [
      {
        title: 'Accommodation',
        src:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        href: '#accommodation'
      },
      {
        title: 'Restaurants',
        src:
          'https://www.healthline.com/hlcmsresource/images/News/food-fads/070615_restaurants_THUMB_LARGE.jpg',
        href: '#restaurant'
      },
      {
        title: 'Activities',
        src: 'https://www.vkirirom.com/images/Activity/BubbleSoccer.jpg',
        href: '#activities'
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
.card {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
  border: 1px solid lightgray;
}
</style>
