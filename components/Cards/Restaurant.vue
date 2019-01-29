<template>
  <div>
    <div class="headline font-weight-bold">Introducing of Restaurant</div>
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
        category: 'Restaurant',
        title: 'Luxury Tent',
        image:
          'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg',
        price: '20',
        href: '#'
      },
      {
        category: 'Restaurant',
        title: 'Khmer Cottage',
        image:
          'http://pandagarden.ca/wp-content/uploads/2017/11/chicken-Chow-Mein_1430566912_1644579089.jpg',
        price: '10',
        href: '#'
      },
      {
        category: 'Restaurant',
        title: 'Auto Camping',
        image:
          'https://img.huffingtonpost.com/asset/5b9e98b83c00004c000a9c7c.jpeg?ops=scalefit_720_noupscale',
        price: '15',
        href: '#'
      },
      {
        category: 'Restaurant',
        title: 'Pipe Room',
        image:
          'https://www.worldofbuzz.com/wp-content/uploads/2018/02/pork-belly-featured-image.jpg',
        price: '10',
        href: '#'
      }
    ]
  })
}
</script>

<style scoped>
</style>
