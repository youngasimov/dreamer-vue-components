<template>
  <div>
    <div class="columns">
      <div class="column">
        <p>Cols</p>
        <input type="Number" v-model.number="cols"/>
      </div>
      <div class="column">
        <p>Cols sm</p>
        <input type="Number" v-model.number="colsSm"/>
      </div>
      <div class="column">
        <p>Cols md</p>
        <input type="Number" v-model.number="colsMd"/>
      </div>
      <div class="column">
        <p>Cols lg</p>
        <input type="Number" v-model.number="colsLg"/>
      </div>
      <div class="column">
        <p>Cols xl</p>
        <input type="Number" v-model.number="colsXl"/>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p>Gap</p>
        <input type="Number" v-model.number="gap"/>
      </div>
      <div class="column">
        <p>Col Gap</p>
        <input type="Number" v-model.number="colGap"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <card-grid :items="cats" :cols="cols" :cols-sm="colsSm" :cols-md="colsMd" :cols-lg="colsLg"
                   :cols-xl="colsXl" :col-gap="colGap" :gap="gap">
          <template scope="cat">
            <hover-carousel :primary="cat.value" :images="cats" :resetOnExit="true"
                            class="dreamer-image"></hover-carousel>
          </template>
        </card-grid>
      </div>
    </div>
  </div>

</template>

<script>
  import CardGrid from './CardGrid'
  import HoverCarousel from './HoverCarousel'

  export default {
    name: 'card-grid-example',
    data () {
      return {
        cols: 4,
        colsSm: 4,
        colsMd: 4,
        colsLg: 4,
        colsXl: 4,
        gap: 0,
        colGap: 0,
        cats: [
          'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
          'https://huilesante.com/wp-content/uploads/2016/10/huile-de-foie-de-morue-pour-animaux.jpg',
          'http://cdn1-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-1.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/35/8c/57/358c57c204a2fec21fa50b917a0728aa.jpg',
          'http://media.salon.com/2015/05/kitten.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/71/96/5c/71965c7b1434d8f233c2862fdd7e8a4a.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/ba/03/23/ba03237a6d6499f0e2633314826e1526.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/a4/cd/17/a4cd17f7a0f57e006949f60f398a66c5.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/40/c1/bd/40c1bd174fa0f13f6a025e6e7e44bec4.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/dd/4e/7e/dd4e7e7dcba5526cd983fc5c9381502a.jpg',
          'http://cms.hostelbookers.com/hbblog/wp-content/uploads/sites/3/2012/02/shoreditch-cat.jpg',
          'http://static4.businessinsider.com/image/5485631e69bedda63303ed51/grumpy-cat-has-earned-her-owner-nearly-100-million-in-just-2-years.jpg'
        ]
      }
    },
    components: {
      HoverCarousel,
      CardGrid
    }
  }
</script>

<style lang='scss'>
  .dreamer-image {
    height: 300px;
    width: 100%;
  }
</style>
