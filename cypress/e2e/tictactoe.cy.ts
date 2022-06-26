/// <reference types="cypress" />

describe('Tic Tac toe', () => {
  it('Assures that the index page has been loaded correctly', () => {
    cy.visit('/')
    cy.get('[data-cy=main-title]').should('exist').and('be.visible')
    cy.get('[data-cy=main-title]').should('contain.text', 'Tic Tac Toe')
    cy.get('[data-cy=span-choose-side').should('exist').and('be.visible')
    cy.get('[data-cy=span-choose-side').should('contain.text', 'Choose a side:')
    cy.get('[data-cy=start-game-button-x] > div').should('have.class', 'i-tabler-x')
    cy.get('[data-cy=start-game-button-circle] > div').should('have.class', 'i-tabler-circle')
    cy.get('[data-cy=game-grid]').should('not.exist')
  })
  it('Start game on X side and assures that it can win', () => {
    cy.get('[data-cy=start-game-button-x]').click()
    cy.get('[data-cy=start-game-modal]').should('not.exist')
  })
})
