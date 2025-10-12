// Run "npx cypress open" in Bash to run test on browser

describe('Basic test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/movie-world/')
  })

  it('Focus on the Search box automatically onload', () => {
    cy.get('#searchBox')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter movie name')
      .should('be.focused')
  })

  it('Searching Harry Potter', () => {
    cy.get('#searchBox')
      .type('Harry Potter')
    cy.get('img[data-tooltip-content="Harry Potter and the Philosopher\'s Stone"]')
      .should('be.visible')
      .click()
    cy.location('pathname').should('equal', '/movie-world/movie/671/harry-potter-and-the-philosophers-stone')
  })

  it('Searching Star Wars', () => {
    cy.get('#searchBox')
      .type('Star Wars')

    // View movie details page
    cy.get('img[data-tooltip-content="Star Wars: The Force Awakens"]')
      .should('be.visible')
      .click()
    cy.get('#movieTitle').contains('Star Wars: The Force Awakens')
    cy.get('#searchBox').should('not.exist')

    // Go back to homepage
    cy.get('#goBack').click()
    cy.location('pathname').should('equal', '/movie-world/')
    cy.get('#searchBox')
      .should('be.visible')
      .and('be.focused')
    cy.get('#movies-container-grid').should('exist')

    // Clear search field
    cy.get('button[data-tooltip-id="clear-tooltip"]').click()
    cy.get('#movies-container-grid').should('not.exist')
  })
})
