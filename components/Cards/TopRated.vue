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
      dots: false,
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
    posts: [
      {
        category: 'Accommodation',
        title: 'Luxury Tent',
        image:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        price: '80',
        href: '#',
        per: 'night'
      },
      {
        title: 'Khmer Cottage',
        image:
          'https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG',
        price: 50,
        href: '#',
        per: 'night'
      },
      {
        title: 'Auto Camping',
        image:
          'https://www.vkirirom.com/images/detailsimage/camping/camping4.JPG',
        price: 30,
        href: '#',
        per: 'night'
      },
      {
        title: 'Pipe Room',
        image:
          'https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG',
        price: 30,
        href: '#',
        per: 'night'
      },
      {
        category: 'Accomodation',
        title: 'Luxury Tent',
        image:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        price: '80',
        href: '#',
        per: 'night'
      },
      {
        title: 'Khmer Cottage',
        image:
          'https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG',
        price: 50,
        href: '#',
        per: 'night'
      },
      {
        title: 'Auto Camping',
        image:
          'https://www.vkirirom.com/images/detailsimage/camping/camping4.JPG',
        price: 30,
        href: '#',
        per: 'night'
      },
      {
        title: 'Pipe Room',
        image:
          'https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG',
        price: 30,
        href: '#',
        per: 'night'
      },
      {
        category: 'Accomodation',
        title: 'Luxury Tent',
        image:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        price: '80',
        href: '#',
        per: 'night'
      },
      {
        title: 'Khmer Cottage',
        image:
          'https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG',
        price: 50,
        href: '#',
        per: 'night'
      },
      {
        title: 'Auto Camping',
        image:
          'https://www.vkirirom.com/images/detailsimage/camping/camping4.JPG',
        price: 30,
        href: '#',
        per: 'night'
      },
      {
        title: 'Pipe Room',
        image:
          'https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG',
        price: 30,
        href: '#',
        per: 'night'
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
