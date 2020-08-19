<template>
  <div id="app">
    <Carousel class="fullPage"/>
    <Parallax class="fullPage"/>
    <Form class="fullPage"/>
  </div>
</template>

<script>

import Carousel from "@/components/Carousel"
import Parallax from "@/components/Parallax"
import Form from "@/components/Form"

export default {

  data: function() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    };
  },

  components: {
    Carousel,
    Parallax,
    Form
  },

  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementById("app").querySelectorAll(".fullPage");
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },

    scrollToSection(id, force = true) {
      if (this.inMove && !force) return false;
      
      this.activeSection = id;
      this.inMove = true;

      console.log(this.offsets)
      console.log(id)
      document
        .getElementById("app")
        .querySelectorAll(".fullPage")
        [id].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },

    handleMouseWheelDOM: function(e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      return false;
    },

    handleMouseWheel: function(e) {
      if (e.wheelDelta < 0 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 0 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },

    moveDown() {
      
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1)
        this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },

    touchStart(e) {
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartYA = 0;
      return false;
    },
  },
  mounted() {
    this.calculateSectionOffsets();
    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM, {
      passive: false,
    }); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers

    window.addEventListener("touchstart", this.touchStart, { passive: false }); // mobile devices
    window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox

    window.removeEventListener("touchstart", this.touchStart); // mobile devices
    window.removeEventListener("touchmove", this.touchMove); // mobile devices
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

body {
  margin: 0;
  padding: 0;
  user-select: none;
}

</style>
