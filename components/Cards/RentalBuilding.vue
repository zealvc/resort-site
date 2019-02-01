<template>
  <div>
    <div class="headline font-weight-bold">Rental Building</div>
    <slick
      ref="slick"
      :options="slickOptions">
      <rental-card
        v-for="(post, index) in posts"
        v-if="index < 3"
        :key="post.id"
        :title="post.title"
        :info="post.info"
        :image="post.image"/>
    </slick>
  </div>
</template>

<script>
import RentalCard from './RentalCard'
export default {
  components: { RentalCard },
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
        title: 'Crazy Hill',
        image: 'https://i.ytimg.com/vi/KAljw5t8JDU/maxresdefault.jpg',
        info: 'Auto Camping + Party + Activities',
        href: '#'
      },
      {
        title: 'Conference Room',
        image:
          'https://www.vkirirom.com/images/Services_and_Facilities/conference.jpg',
        info: 'Meeting up to 20+ people',
        href: '#'
      },
      {
        title: 'Borey R',
        image: 'https://property.vkirirom.com/images/background/1.jpg',
        info: 'Meeting up to 4 people',
        href: '#'
      }
    ]
  })
}
</script>

<style scoped>
</style>
