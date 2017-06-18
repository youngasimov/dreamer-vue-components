<template>

  <div id="app">
    <nav class="nav" style="background: #22509a">
      <div class="nav-left">
        <a class="nav-item">
          <img src="./assets/logo.png" alt="Dreamer 8 logo">
        </a>
      </div>
    </nav>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Dreamer Vue Components
          </h1>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Hover Carousel</h1>
          <hover-carousel-example/>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Dreamer Grid</h1>
          <card-grid-example/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import HoverCarouselExample from './components/HoverCarouselExample'
  import CardGridExample from './components/CardGridExample'

  export default {
    name: 'app',
    components: {
      HoverCarouselExample,
      CardGridExample
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
