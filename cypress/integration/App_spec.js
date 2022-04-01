describe('Rancid Tomatillos home page', () => {
  it('should open home page upon login', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    cy.visit('http://localhost:3000')
      .get('.poster-image')
      .get('.movie');
  });
});
