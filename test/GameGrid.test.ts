import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import GameGrid from '../src/components/GameGrid.vue'

describe('GameGrid component unit tests', () => {
  it('Mounts the component on X side and assures the turn displayer is correct', () => {
    const wrapper = mount(GameGrid, { props: { side: 'ex' } })
    const xTurnDisplay = wrapper.find('[data-cy="x-turn-display"]')
    expect(xTurnDisplay).toBeTruthy()
  })
  it('Mounts the component on Circle side and assures the turn displayer is correct', () => {
    const wrapper = mount(GameGrid, { props: { side: 'circle' } })
    const circleTurnDisplay = wrapper.find('[data-cy="circle-turn-display"]')
    expect(circleTurnDisplay).toBeTruthy()
  })
})
