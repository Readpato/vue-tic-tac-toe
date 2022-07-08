import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Index from '../src/pages/index.vue'

describe('Index unit tests', () => {
  it('Start game on X side and assures the starting modal dissapears', async () => {
    const wrapper = mount(Index)
    const xSideButton = wrapper.find('[data-cy="start-game-button-x"]')

    expect(wrapper.find('[data-cy="start-game-modal"]').exists()).toBe(true)
    expect(wrapper.find('[data-cy="game-grid"]').exists()).toBe(false)
    await xSideButton.trigger('click')
    expect(wrapper.find('[data-cy="start-game-modal"]').exists()).toBe(false)
    expect(wrapper.find('[data-cy="game-grid"]').exists()).toBe(true)
  })
  it('Start game on circle side and assures the starting modal dissapears', async () => {
    const wrapper = mount(Index)
    const circleSideButton = wrapper.find('[data-cy="start-game-button-x"]')

    expect(wrapper.find('[data-cy="start-game-modal"]').exists()).toBe(true)
    expect(wrapper.find('[data-cy="game-grid"]').exists()).toBe(false)
    await circleSideButton.trigger('click')
    expect(wrapper.find('[data-cy="start-game-modal"]').exists()).toBe(false)
    expect(wrapper.find('[data-cy="game-grid"]').exists()).toBe(true)
  })
})
