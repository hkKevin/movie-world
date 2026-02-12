// Run "npx cypress open" in Bash to run test on browser

// describe('Basic test on local env', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000/movie-world/#/')
//   })

//   it('Focus on the Search box automatically onload', () => {
//     cy.get('#searchBox')
//       .should('be.visible')
//       .should('be.focused')
//       .invoke('attr', 'placeholder')
//       .should('include', 'Enter movie name')
//     })

//   it('Searching Harry Potter', () => {
//     cy.get('#searchBox')
//       .type('Harry Potter')
//     cy.get('img[data-tooltip-content="Harry Potter and the Philosopher\'s Stone"]')
//       .should('be.visible')
//       .click()
//     //cy.url() gets the full URL and has built-in retry logic
//     cy.url().should('include', 'movie/671/harry-potter-and-the-philosophers-stone')
//   })

//   it('Searching Star Wars', () => {
//     cy.get('#searchBox')
//       .type('Star Wars')

//     // View movie details page
//     cy.get('img[data-tooltip-content="Star Wars: The Force Awakens"]')
//       .should('be.visible')
//       .click()
//     // cy.hash() gets just the hash portion (everything after #):
//     cy.hash().should('eq', '#/movie/140607/star-wars-the-force-awakens')
//     cy.get('#movieTitle').contains('Star Wars: The Force Awakens')
//     cy.get('#searchBox').should('not.exist')

//     // Go back to homepage
//     cy.get('#goBack').click()
//     cy.hash().should('eq', '#/')
//     cy.get('#searchBox')
//       .should('be.visible')
//       .and('be.focused')
//     cy.get('#movies-container-grid').should('exist')

//     // Clear search field
//     cy.get('button[data-tooltip-id="clear-tooltip"]').click()
//     cy.get('#movies-container-grid').should('not.exist')
//   })
// })

describe('Basic test on production env', () => {
  beforeEach(() => {
    cy.viewport(393, 852) // iPhone 15, 15 Pro
    cy.visit('https://hkkevin.github.io/movie-world/#/')
  })

  it('Focus on the Search box automatically onload', () => {
    cy.get('#searchBox')
      .should('be.visible')
      .should('be.focused')
      .invoke('attr', 'placeholder')
      .should('include', 'Enter movie name')
    })

  it('Searching Harry Potter', () => {
    cy.get('#searchBox')
      .type('Harry Potter', { delay: 100 }) // 100ms between each keystroke
    cy.wait(1000)
    cy.get('img[data-tooltip-content="Harry Potter and the Philosopher\'s Stone"]')
      .should('be.visible')
      .click()
    cy.wait(2000)
    //cy.url() gets the full URL and has built-in retry logic
    cy.url().should('include', 'movie/671/harry-potter-and-the-philosophers-stone')
    cy.get('#goBack').click()
    cy.hash().should('eq', '#/')
  })

  it('Searching Star Wars', () => {
    cy.get('#searchBox')
      .type('Star Wars', { delay: 100 })

    // View movie details page
    cy.get('img[data-tooltip-content="Star Wars: The Force Awakens"]')
      .should('be.visible')
      .click()
    cy.wait(2000)
    // cy.hash() gets just the hash portion (everything after #):
    cy.hash().should('eq', '#/movie/140607/star-wars-the-force-awakens')
    cy.get('#movieTitle').contains('Star Wars: The Force Awakens')
    cy.get('#searchBox').should('not.exist')

    // Go back to homepage
    // cy.wait(2000)
    cy.get('#goBack').click()
    cy.hash().should('eq', '#/')
    cy.get('#searchBox')
      .should('be.visible')
      .and('be.focused')
    cy.get('#movies-container-grid').should('exist')

    // Clear search field
    cy.wait(1000)
    cy.get('button[data-tooltip-id="clear-tooltip"]').click()
    cy.get('#movies-container-grid').should('not.exist')
  })
})
