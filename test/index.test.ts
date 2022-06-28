import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Index from '../src/pages/index.vue'

describe('Selects X side and makes three in a row', () => {
  it('Start game on X side ', async () => {
    const wrapper = mount(Index)
    const startGameModal = wrapper.find('[data-cy="start-game-modal"]')
    const gameGrid = wrapper.find('[data-cy="game-grid"]')
    const XSideButton = wrapper.find('[data-cy="start-game-button-x"]')

    expect(gameGrid.exists()).toBe(false)
    expect(startGameModal.exists()).toBe(true)
    await XSideButton.trigger('click')
    expect(wrapper.find('[data-cy="start-game-modal"]').exists()).toBe(false)
    expect(wrapper.find('[data-cy="game-grid"]').exists()).toBe(true)
  })

  // it('should be interactive', async () => {
  //   const wrapper = mount(Counter, { props: { initial: 0 } })
  //   expect(wrapper.text()).toContain('0')

  //   expect(wrapper.find('.inc').exists()).toBe(true)

  //   await wrapper.get('button').trigger('click')

  //   expect(wrapper.text()).toContain('1')
  // })
})
