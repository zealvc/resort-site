<template>
  <div>
    <div class="headline font-weight-bold">Introducing of Accommodation</div>
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
        :per="'per ' + post.per"
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
        category: 'Accommodation',
        title: 'Luxury Tent',
        image:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        price: '80',
        href: '#',
        per: 'night'
      },
      {
        category: 'Accommodation',
        title: 'Khmer Cottage',
        image:
          'https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG',
        price: '50',
        href: '#',
        per: 'night'
      },
      {
        category: 'Accommodation',
        title: 'Auto Camping',
        image:
          'https://www.vkirirom.com/images/detailsimage/camping/camping4.JPG',
        price: '30',
        href: '#',
        per: 'night'
      },
      {
        category: 'Accommodation',
        title: 'Pipe Room',
        image:
          'https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG',
        price: '30',
        href: '#',
        per: 'night'
      },
      {
        category: 'Accommodation',
        title: 'Khmer Cottage',
        image:
          'https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG',
        price: '50',
        href: '#',
        per: 'night'
      },
      {
        category: 'Accommodation',
        title: 'Auto Camping',
        image:
          'https://www.vkirirom.com/images/detailsimage/camping/camping4.JPG',
        price: '30',
        href: '#',
        per: 'night'
      },
      {
        category: 'Accommodation',
        title: 'Pipe Room',
        image:
          'https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG',
        price: '30',
        href: '#',
        per: 'night'
      },
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
        category: 'Accommodation',
        title: 'Khmer Cottage',
        image:
          'https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG',
        price: '50',
        href: '#',
        per: 'night'
      },
      {
        category: 'Accommodation',
        title: 'Auto Camping',
        image:
          'https://www.vkirirom.com/images/detailsimage/camping/camping4.JPG',
        price: '30',
        href: '#',
        per: 'night'
      },
      {
        category: 'Accommodation',
        title: 'Pipe Room',
        image:
          'https://www.vkirirom.com/images/detailsimage/piperoom/piperoom5.JPG',
        price: '30',
        href: '#',
        per: 'night'
      }
    ]
  })
}
</script>

<style scoped>
</style>
