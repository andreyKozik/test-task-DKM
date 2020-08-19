<template>
  <div class="carousel">
    <VueSlickCarousel class="wrapper-slide" :arrows="true">
      <div class="slide el1">Slide 1</div>
      <div class="slide el2">Slide 2</div>
      <div class="slide el3">Slide 3</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  
  components: { VueSlickCarousel },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

.carousel {
  width: 100%;
  height: 100vh;
  background-color: $carousel;
  .wrapper-slide {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .slide {
      width: 100%;
      height: 100vh;
      display: flex !important;
      justify-content: center;
      align-items: center;
      font-size: 80px;
    }
    .el1 {
      background-color: salmon;
    }
    .el2 {
      background-color: rgb(250, 207, 114);
    }
    .el3 {
      background-color: rgb(114, 250, 175);
    }
  }
}
</style>
