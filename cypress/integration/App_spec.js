describe('Rancid Tomatillos home page', () => {
  it('should open home page upon login', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    cy.visit('http://localhost:3000')
      .get('.poster-image')
      .get('.movie');
  });

  it('should have a header on the page', () => {
    cy.visit('http://localhost:3000')
    .get('.title')
    .contains('Rancid Tomatillos')
  })

  it('should have a see more detail button in the banner', () => {
    cy.visit('http://localhost:3000')
      .get('.header-image')
      .get('.movie-details-button');
  })

  it('should be able to see more details when clicking the deatils button in banner', () => {
    cy.visit('http://localhost:3000')
    .get('.movie-details-button')
    .click()
    cy.visit('http://localhost:3000/718444')
      .get('.title-poster')
      .get('.poster');
  })

  it('should be able to sort alpabetically', () => {
    cy.visit('http://localhost:3000')
    .get('.sort-bar')
    .contains("Sort A-Z").click()
  })
});
