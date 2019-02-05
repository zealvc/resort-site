<template>
  <div>
    <img-gallery
      :img_1="imgSrc.img_1"
      :img_2="imgSrc.img_2"
      :img_3="imgSrc.img_3"
      :img_4="imgSrc.img_4"
      :img_5="imgSrc.img_5"/>
  </div>
</template>

<script>
import ImgGallery from './ImgGallery'
export default {
  name: 'MainGallery',
  components: { ImgGallery },
  data: () => ({
    imgSrc: {
      img_1:
        'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow1.jpg',
      img_2:
        'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow5.jpg',
      img_3:
        'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow4.jpg',
      img_4:
        'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow3.jpg',
      img_5:
        'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow6.jpg'
    }
  })
}
</script>

<style scoped>
</style>
