<template>
  <div class="parallax">
    <img class="star" src="@/assets/img/star.svg" alt="star" />
    <img class="star" src="@/assets/img/star.svg" alt="star" />
    <img class="star" src="@/assets/img/star.svg" alt="star" />
  </div>
</template>

<script>
export default {
  
  beforeMount() {
    window.addEventListener("mousemove", function(event) {
      let mouseX = ((event.pageX / screen.width) * 30) + 'px';
      let mouseY = ((event.pageY / screen.height)* 30) + 'px';
      document.querySelectorAll(".star").forEach((el)=> el.style.transform = `translate(${mouseX},${mouseY})`)
    });
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

.parallax {
  width: 100%;
  height: 100vh;
  background-color: $parallax;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    z-index: 100;
  }
}
</style>
