<template>
  <div>
    <v-layout
      class="pointer">
      <v-flex xs12>
        <v-card
          flat
          color="#484848">
          <v-container
            fluid
            pa-0>
            <v-layout
              row
              wrap>
              <v-flex
                xs12
                sm8
                md6
                d-flex>
                <v-card
                  :href="'#'"
                  class="rounded-card"
                  color="#484848"
                  flat>
                  <v-responsive>
                    <v-img
                      :src="img_1"
                      :lazy-src="'https://picsum.photos/10/6'"
                      class="gallery-img"
                      aspect-ratio="2.3"
                    />
                  </v-responsive>
                </v-card>
              </v-flex>
              <v-flex
                d-flex
                xs12
                sm4
                md3>
                <v-layout
                  class="hidden-xs-only"
                  row
                  wrap>
                  <v-flex d-flex>
                    <v-layout
                      row
                      wrap>
                      <v-flex
                        d-flex
                        xs12>
                        <v-card
                          class="rounded-card"
                          color="#484848"
                          flat>
                          <v-responsive>
                            <v-img
                              :src="img_2"
                              :lazy-src="'https://picsum.photos/10/6'"
                              class="gallery-img"
                              aspect-ratio="2.3"
                            />
                          </v-responsive>
                        </v-card>
                      </v-flex>
                      <v-flex
                        d-flex
                        xs12>
                        <v-card
                          class="rounded-card"
                          color="#484848"
                          flat>
                          <v-responsive>
                            <v-img
                              :src="img_3"
                              :lazy-src="'https://picsum.photos/10/6'"
                              class="gallery-img"
                              aspect-ratio="2.3"
                            />
                          </v-responsive>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex
                d-flex
                xs12
                sm4
                md3>
                <v-layout
                  row
                  wrap
                  class="hidden-sm-and-down">
                  <v-flex d-flex>
                    <v-layout
                      row
                      wrap>
                      <v-flex
                        d-flex
                        xs12>
                        <v-card
                          class="rounded-card"
                          color="#484848"
                          flat>
                          <v-responsive>
                            <v-img
                              :src="img_4"
                              :lazy-src="'https://picsum.photos/10/6'"
                              class="gallery-img"
                              aspect-ratio="2.3"
                            />
                          </v-responsive>
                        </v-card>
                      </v-flex>
                      <v-flex
                        d-flex
                        xs12>
                        <v-card
                          class="rounded-card"
                          color="#484848"
                          flat>
                          <v-responsive>
                            <v-img
                              :src="img_5"
                              :lazy-src="'https://picsum.photos/10/6'"
                              class="gallery-img"
                              aspect-ratio="2.3"
                            />
                          </v-responsive>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
              <div class="view">
                <view-photos-btn/>
              </div>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ViewPhotosBtn from './ViewBtnWithSlideShow'
export default {
  name: 'ImgGallery',
  components: { ViewPhotosBtn },
  props: {
    img_1: {
      type: String,
      default: ''
    },
    img_2: {
      type: String,
      default: ''
    },
    img_3: {
      type: String,
      default: ''
    },
    img_4: {
      type: String,
      default: ''
    },
    img_5: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.view {
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.14);
  position: absolute;
  left: auto;
  right: 24px;
  bottom: 24px;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  z-index: 10;
}
.pointer {
  cursor: pointer;
}
.rounded-card {
  border: 1px solid #484848;
  border-radius: 0;
}
.gallery-img:hover {
  transform: scale(1.05);
  transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}
</style>
