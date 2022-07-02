import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import GridTile from '../src/components/GridTile.vue'

describe('GridTile component unit tests', () => {
  it('Mounts component with X prop and checks it appears', async () => {
    const wrapper = mount(GridTile, { id: '1', type: 'ex' })
    expect(wrapper.find('[data-cy="x-tile-icon"]').exists()).toBe(false)
    await wrapper.trigger('click')
    expect(wrapper.find('[data-cy="x-tile-icon"]').exists()).toBe(true)
  })
})
