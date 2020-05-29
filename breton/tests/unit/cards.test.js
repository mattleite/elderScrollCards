import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Cards from '../../src/components/cards/Cards.vue'

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(App, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
