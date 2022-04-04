describe('Rancid Tomatillos movie page', () => {
  it('should load one movie card', () => {
    cy.visit('http://localhost:3000/659986')
      .contains('View All Movies')
      .get('.release-date')
      .get('.rating')
      .get('.view-all-movies-button')
      .get('.poster');
  });

  it('should return back to all movies', () => {
    cy.visit('http://localhost:3000/659986')
      .contains('View All Movies')
      .click()
      .get('.movie');
  });

  it('should have a view movie trailer button', () => {
    cy.visit('http://localhost:3000/659986')
      .contains('View Movie Trailer')
      .click()
      .get('.movie-trailer-section');
  });
});
