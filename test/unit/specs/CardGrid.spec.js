import Vue from 'vue'
import CardGrid from '@/components/CardGrid'

describe('CardGrid.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CardGrid)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.notEqual('Welcome to Your Vue.js App')
  })
})
