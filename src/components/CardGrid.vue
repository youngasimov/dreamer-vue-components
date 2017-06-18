<template>

  <div class="card-grid">
    <div v-for="col in computedCols" :style="{ width: (100/computedCols)+'%' }" :key="col">
      <div v-for="(item,$index) in itemsInColumn(items,col)" :style="{padding: gap+'px '+colGap+'px'}"
           :key="($index+1)*col">
        <slot :value="item" :index="$index"></slot>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'card-grid',
    props: {
      cols: {
        type: Number,
        required: true
      },
      colsSm: Number,
      colsMd: Number,
      colsLg: Number,
      colsXl: Number,
      colGap: {
        type: Number,
        default: 0
      },
      gap: {
        type: Number,
        default: 0
      },
      items: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        windowSize: 'xs'
      }
    },
    computed: {
      computedCols () {
        switch (this.windowSize) {
          case 'xs':
            return this.cols
          case 'sm':
            return this.computedSm()
          case 'md':
            return this.computedMd()
          case 'lg':
            return this.computedLg()
          case 'xl':
            return this.computedXl()
          default:
            return this.cols
        }
      }
    },
    mounted () {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      itemsInColumn (array, col) {
        const cols = this.computedCols
        return array.filter(function (item, index) {
          return index % cols === (col - 1)
        })
      },
      handleResize () {
        this.windowSize = window.getComputedStyle(this.$el, ':before').getPropertyValue('content').replace(/"/g, '')
      },
      computedSm () {
        return (this.colsSm === undefined) ? this.cols : this.colsSm
      },
      computedMd () {
        return (this.colsMd === undefined) ? this.computedSm() : this.colsMd
      },
      computedLg () {
        return (this.colsLg === undefined) ? this.computedMd() : this.colsLg
      },
      computedXl () {
        return (this.colsXl === undefined) ? this.computedLg() : this.colsXl
      }
    }
  }
</script>

<style lang='scss' scoped>

  $grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
  );

  .card-grid:before {
    display: none;
  }

  @each $breakpoint in map-keys($grid-breakpoints) {
    @media (min-width: #{map-get($grid-breakpoints, $breakpoint)}) {
      .card-grid:before {
        content: "#{$breakpoint}";
      }
    }
  }

  .card-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

</style>
