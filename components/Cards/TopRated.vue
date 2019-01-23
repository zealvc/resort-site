<template>
  <div>
    <div>
      <h2>Top-rated of vKirirom Resort</h2>
    </div>
    <slick
      ref="slick"
      :options="slickOptions">
      <div
        v-for="card in cards"
        :key="card.id">
        <v-card
          :href="card.href"
          hover="true"
          class="rounded-card"
          min-width="171px">
          <v-layout column>
            <v-flex>
              <v-img
                :src="card.src"
                height="240px">
                <v-layout
                  align-end
                  fill-height>
                  <v-flex>
                    <v-card
                      style="background-color: rgba(0,0,0,0.51);">
                      <v-card-text class="px-2 grey--text text--lighten-3">
                        <h1 class="body-2 font-weight-thin text-capitalize">{{ card.title }}</h1>
                        <h1 class="title font-weight-bold text-capitalize">{{ card.name }}</h1>
                        <h1 class="subheading font-weight-thin text-lowercase">{{ card.price }}</h1>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-img>
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
      dots: true,
      infinite: false,
      slidesToShow: 6,
      variableWidth: true,

      responsive: [
        {
          breakpoint: 595,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 325,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        }
      ]
    },
    cards: [
      {
        title: 'Accommodation',
        name: 'bungalow',
        src:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        price: '80$ per night',
        href: '#'
      },
      {
        title: 'Restaurant',
        name: 'Food Name',
        src:
          'https://www.healthline.com/hlcmsresource/images/News/food-fads/070615_restaurants_THUMB_LARGE.jpg',
        price: '10$',
        href: '#'
      },
      {
        title: 'Activities',
        name: 'Bubble Soccer',
        src: 'https://www.vkirirom.com/images/Activity/BubbleSoccer.jpg',
        price: '20$',
        href: '#'
      },
      {
        title: 'Accommodation',
        name: 'bungalow',
        src:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        price: '80$ per night',
        href: '#'
      },
      {
        title: 'Restaurant',
        name: 'Food Name',
        src:
          'https://www.healthline.com/hlcmsresource/images/News/food-fads/070615_restaurants_THUMB_LARGE.jpg',
        price: '10$',
        href: '#'
      },
      {
        title: 'Activities',
        name: 'Bubble Soccer',
        src: 'https://www.vkirirom.com/images/Activity/BubbleSoccer.jpg',
        price: '20$',
        href: '#'
      },
      {
        title: 'Accommodation',
        name: 'bungalow',
        src:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        price: '80$ per night',
        href: '#'
      },
      {
        title: 'Restaurant',
        name: 'Food Name',
        src:
          'https://www.healthline.com/hlcmsresource/images/News/food-fads/070615_restaurants_THUMB_LARGE.jpg',
        price: '10$',
        href: '#'
      },
      {
        title: 'Activities',
        name: 'Bubble Soccer',
        src: 'https://www.vkirirom.com/images/Activity/BubbleSoccer.jpg',
        price: '20$',
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
