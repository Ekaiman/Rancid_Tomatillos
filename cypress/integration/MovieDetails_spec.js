describe('Rancid Tomatillos movie page', () => {
  it('should load one movie card', () => {
    cy.visit('http://localhost:3000/movies/659986')
      .contains('View All Movies')
      .get('.release-date')
      .get('.rating')
      .get('.view-all-movies-button')
      .get('.poster');
  });

  // it('should show an error if movie doesnt exist', () => {
  //   cy.visit('http://localhost:3000/movies/659986')
  //   .get('.errorMsg');
  // })

  it('should return back to all movies', () => {
    cy.visit('http://localhost:3000/movies/659986')
      .contains('View All Movies')
      .click()
      .get('.movie');
  });
});
