<template>
  <div>
    <div class="headline font-weight-bold">Introducing of Activities</div>
    <slick
      ref="slick"
      :options="slickOptions">
      <intro-card
        v-for="(post, index) in posts"
        v-if="index < 4"
        :key="post.id"
        :category="post.category"
        :title="post.title"
        :price="post.price"
        :per="'per person'"
        :image="post.image"
        :href="href"/>
    </slick>
  </div>
</template>

<script>
import IntroCard from './IntroCard'
export default {
  components: { IntroCard },
  data: () => ({
    slickOptions: {
      dots: false,
      infinite: false,
      slidesToShow: 4,
      variableWidth: true,

      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    },
    posts: [
      {
        category: 'Activities',
        title: 'Bubble Soccer',
        image: 'https://www.vkirirom.com/images/Activity/BubbleSoccer.jpg',
        price: '80',
        href: '#'
      },
      {
        category: 'Activities',
        title: 'Mountain Bike Rental',
        image: 'https://www.vkirirom.com/images/Activity/BikeRental.jpg',
        price: '50',
        href: '#'
      },
      {
        category: 'Activities',
        title: 'Hit the Clay Pot',
        image: 'https://www.vkirirom.com/images/Activity/HitClayPot.jpg',
        price: '30',
        href: '#'
      },
      {
        category: 'Activities',
        title: 'Cycling',
        image: 'https://www.vkirirom.com/images/Activity/Cycling.jpg',
        price: '30',
        href: '#'
      }
    ]
  })
}
</script>

<style scoped>
</style>
