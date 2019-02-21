<template>
  <v-layout
    row
    justify-end>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="fade-transition">
      <v-btn
        slot="activator"
        :ripple="false"
        color="white"
        class="text--white text-capitalize no-hover border-rounded ma-0">
        {{ $t('view_photos') }}
      </v-btn>
      <v-layout
        align-center
        justify-center
        row
        fill-height
        class="bg_dialog">
        <v-flex>
          <div>
            <div
              v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div
                  v-for="(img, index) in imgSrc"
                  :key="index"
                  class="swiper-slide">
                  <v-img
                    :src="img"
                    height="400px"
                    contain/>
                </div>
              </div>
              <div class="swiper-pagination"/>
              <div
                slot="pagination"
                class="swiper-pagination swiper-pagination-white"/>
              <div
                slot="button-prev"
                class="swiper-button-prev swiper-button-white"/>
              <div
                slot="button-next"
                class="swiper-button-next swiper-button-white"/>
            </div>
          </div>
        </v-flex>
        <v-icon
          class="close-button text--white"
          x-large
          @click="dialog = false">close</v-icon>
      </v-layout>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'ViewBtnWithSlideShow',
  data: () => ({
    dialog: false,
    swiperOption: {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    imgSrc: [
      'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow1.jpg',
      'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow5.jpg',
      'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow4.jpg',
      'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow3.jpg',
      'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow6.jpg'
    ]
  })
}
</script>

<style scoped>
.swiper-pagination-white {
  color: #ffffff;
}
.bg_dialog {
  background-color: #262626;
}
.no-hover:before,
.no-hover:hover:before,
.no-hover:focus:before {
  background-color: transparent;
}
.border-rounded {
  border-radius: 3px;
}
.close-button {
  color: #fff;
  position: fixed;
  top: 15px;
  right: 40px;
  font-size: 36px;
  text-align: center;
  cursor: pointer;
  z-index: 9999;
}
</style>
