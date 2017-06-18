<template>
  <div ref="image" class="hover-carousel" :style="{height: height}">
    <img v-if="primary !== null" :src="getSrc(primary)" class="primary"/>
    <transition-group :name="transition" mode="in-out">
      <div
        v-for="image in images"
        :style="{backgroundImage: 'url(' + getSrc(image) + ')'}"
        class="image-item"
        :class="direction"
        :key="getKey(image)"
        v-show="getKey(image) === getKey(current)">
      </div>
    </transition-group>
    <div class="actionables" :class="orientation" @mouseleave="resetImage()">
      <div v-for="image in images" class="image-activator" @mouseenter="toggleImage(image)">
      </div>
    </div>
    <div class="overlay">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'hover-carousel',
    props: {
      primary: {
        type: [String, Object],
        default: null
      },
      images: {
        type: Array,
        required: true
      },
      imageSrc: String,
      imageKey: String,
      transition: {
        type: String,
        default: 'none'
      },
      orientation: {
        type: String,
        default: 'horizontal'
      },
      resetOnExit: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        current: null,
        direction: 'right'
      }
    },
    computed: {
      height: function () {
        return (this.primary === null) ? '100%' : 'auto'
      }
    },
    created () {
      this.current = (this.primary === null) ? this.images[0] : this.primary
    },
    methods: {
      getSrc (image) {
        return (typeof image === 'string') ? image : image[this.imageSrc]
      },
      getKey (image) {
        return (typeof image === 'string') ? image : image[this.imageKey]
      },
      resetImage () {
        if (this.resetOnExit) {
          this.toggleImage((this.primary === null) ? this.images[0] : this.primary)
        }
      },
      toggleImage (image) {
        const prev = this.images.indexOf(this.current)
        const next = this.images.indexOf(image)
        if (prev < next) {
          this.direction = 'right'
        } else {
          this.direction = 'left'
        }
        this.current = image
      },
      onSwipeLeft () {
        const current = this.images.indexOf(this.current)
        const next = (current + 1) % this.images.length
        this.toggleImage(this.images[next])
      },
      onSwipeRight () {
        const current = this.images.indexOf(this.current)
        const prev = ((current - 1) < 0) ? this.images.length - 1 : (current - 1) % this.images.length
        this.toggleImage(this.images[prev])
      }
    }
  }
</script>

<style lang='scss' scoped>
  .hover-carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
    .primary {
      width: 100%;
      height: auto;
    }
    .image-item, .actionables, .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
    }
    .overlay {
      pointer-events: none;
      background: none !important;
      button, a {
        pointer-events: all;
      }
    }
    .image-item {
      width: 100%;
      background-repeat: no-repeat;
      background-origin: content-box;
      background-size: cover;
    }
    .actionables {
      display: flex;
      &.horizontal {
        flex-direction: row;
      }
      &.vertical {
        flex-direction: column;
      }
      .image-activator {
        width: 100%;
        height: 100%;
      }
    }

    .none-leave, .none-enter-to, .none-enter, .none-leave-to {
      opacity: 1;
    }
    .none-enter-active, .none-leave-active {
      transition: all 0ms;
    }

    .fade-enter-active, .fade-leave-active, .slide-enter-active, .slide-leave-active {
      transition: all 500ms ease;
    }

    .fade-leave, .fade-enter-to {
      opacity: 1;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }

    .right {
      &.slide-leave, &.slide-enter-to {
        left: 0;
      }
      &.slide-enter {
        left: 100%;
      }
      &.slide-leave-to {
        left: -100%;
      }
    }
    .left {
      &.slide-leave, &.slide-enter-to {
        left: 0;
      }
      &.slide-enter {
        left: -100%;
      }
      &.slide-leave-to {
        left: 100%;
      }
    }

    .slide-vertical-enter-active, .slide-vertical-leave-active {
      transition: all 500ms ease;
    }

    .right {
      &.slide-vertical-leave, &.slide-vertical-enter-to {
        top: 0;
      }
      &.slide-vertical-enter {
        top: 100%;
      }
      &.slide-vertical-leave-to {
        top: -100%;
      }
    }
    .left {
      &.slide-vertical-leave, &.slide-vertical-enter-to {
        top: 0;
      }
      &.slide-vertical-enter {
        top: -100%;
      }
      &.slide-vertical-leave-to {
        top: 100%;
      }
    }
  }
</style>
