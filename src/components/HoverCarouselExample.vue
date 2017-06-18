<template>
  <div class="columns">
    <div class="column">
      <div class="card" style="height: auto;">
        <hover-carousel style="width: 100%;" :primary="cats[0]" :images="cats" image-src="src" image-key="key"
                        alt="Basic Image gallery"></hover-carousel>
        <div class="card-content">
          <h3 class="title">
            Basic gallery
          </h3>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card gallery-card">
        <div class="card-img">
          <hover-carousel :images="cats" image-src="src" image-key="key" transition="fade"
                          alt="Image gallery with fade transition"></hover-carousel>
        </div>
        <div class="card-content">
          <h3 class="title is-4">
            Image gallery with fade transition
          </h3>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card gallery-card">
        <div class="card-img">
          <hover-carousel :images="cats" image-src="src" image-key="key" transition="slide-vertical"
                          orientation="vertical"
                          alt="Image gallery with slide transition and vertical hovers"></hover-carousel>
        </div>
        <div class="card-content">
          <h3 class="title is-4">
            Image gallery with vertical slide transition
          </h3>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card gallery-card">
        <div class="card-img">
          <hover-carousel :images="cats" transition="slide" orientation="horizontal"
                          :resetOnExit="true"
                          image-src="src" image-key="key"
                          alt="Image gallery with slide transition and overlay elements">
            <h3 class="title is-3">Hi there! </h3>

            <button type="button" class="button is-primary clickme" @click="clickMe">Click Me!</button>
          </hover-carousel>
        </div>
        <div class="card-content">
          <h3 class="title is-4">
            Image gallery with slide transition and overlay elements
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HoverCarousel from './HoverCarousel'

  export default {
    name: 'hover-carousel-example',
    data () {
      return {
        cats: [
          {
            src: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
            key: 1
          },
          {
            src: 'https://huilesante.com/wp-content/uploads/2016/10/huile-de-foie-de-morue-pour-animaux.jpg',
            key: 2
          },
          {
            src: 'http://cdn1-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-1.jpg',
            key: 3
          },
          {
            src: 'https://s-media-cache-ak0.pinimg.com/736x/35/8c/57/358c57c204a2fec21fa50b917a0728aa.jpg',
            key: 4
          },
          {
            src: 'http://media.salon.com/2015/05/kitten.jpg',
            key: 5
          },
          {
            src: 'https://s-media-cache-ak0.pinimg.com/736x/71/96/5c/71965c7b1434d8f233c2862fdd7e8a4a.jpg',
            key: 6
          }
        ]
      }
    },
    methods: {
      clickMe: function () {
        console.log('Meau!!! :)')
        alert('Meau!!! :)')
      }
    },
    components: {
      HoverCarousel
    }
  }
</script>

<style lang='scss'>

  .gallery-card {
    position: relative;
    .card-img {
      height: 300px;
    }
    .clickme {
      position: absolute;
      bottom: 10px;
      left: 10px;
    }
  }

</style>
