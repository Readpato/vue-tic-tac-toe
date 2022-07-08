import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import GridTile from '../src/components/GridTile.vue'

describe('GridTile component unit tests', () => {
  it('Mounts component with X prop and checks it renders and emits', async () => {
    const wrapper = mount(GridTile, { props: { id: '1', type: 'ex' } })
    expect(wrapper.find('[data-cy="x-tile-icon"]').exists()).toBe(false)
    await wrapper.trigger('click')
    expect(wrapper.find('[data-cy="x-tile-icon"]').exists()).toBe(true)
    expect(wrapper.emitted()).toHaveProperty('onTileSelect')
    expect(wrapper.emitted().onTileSelect).toHaveLength(1)
    expect(wrapper.emitted().onTileSelect[0]).toEqual(['1'])
  })
  it('Mounts component with Y prop and checks it renders and emits', async () => {
    const wrapper = mount(GridTile, { props: { id: '2', type: 'circle' } })
    expect(wrapper.find('[data-cy="circle-tile-icon"]').exists()).toBe(false)
    await wrapper.trigger('click')
    expect(wrapper.find('[data-cy="circle-tile-icon"]').exists()).toBe(true)
    expect(wrapper.emitted()).toHaveProperty('onTileSelect')
    expect(wrapper.emitted().onTileSelect).toHaveLength(1)
    expect(wrapper.emitted().onTileSelect[0]).toEqual(['2'])
  })
})
