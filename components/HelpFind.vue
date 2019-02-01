<template>
  <div>
    <div class="headline font-weight-bold">What can we help you to find?</div>
    <v-flex>
      <slick
        ref="slick"
        :options="slickOptions">
        <find-card
          v-for="post in posts"
          :key="post.id"
          :category="post.category"
          :image="post.image"
          :href="post.href"/>
      </slick>
    </v-flex>
  </div>
</template>

<script>
import FindCard from './Cards/FindCards'
export default {
  name: 'HelpFind',
  components: { FindCard },
  data: () => ({
    slickOptions: {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      adaptiveHeight: true,
      variableWidth: true,
      arrows: false,

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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    },
    posts: [
      {
        category: 'Accommodation',
        image:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        href: '#accommodation'
      },
      {
        category: 'Restaurants',
        image:
          'https://www.healthline.com/hlcmsresource/images/News/food-fads/070615_restaurants_THUMB_LARGE.jpg',
        href: '#restaurant'
      },
      {
        category: 'Activities',
        image: 'https://www.vkirirom.com/images/Activity/BubbleSoccer.jpg',
        href: '#activities'
      }
    ]
  })
}
</script>

<style scoped>
</style>
