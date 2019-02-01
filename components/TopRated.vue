<template>
  <div>
    <h2 class="headline font-weight-bold">Top-rated of vKirirom Resort</h2>
    <slick
      ref="slick"
      :options="slickOptions">
      <top-rated-card
        v-for="(post, i) in posts"
        :key="i"
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
import TopRatedCard from './Cards/TopRatedCard'
export default {
  components: { TopRatedCard },
  data: () => ({
    slickOptions: {
      dots: false,
      infinite: false,
      slidesToShow: 6,
      variableWidth: true,

      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
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
        category: 'Accomodation',
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
