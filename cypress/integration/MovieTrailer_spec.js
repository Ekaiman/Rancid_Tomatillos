beforeEach(() => {
    cy.visit('http://localhost:3000/659986/videos')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/659986/videos', {
      status: 200
    })
  });

describe('Rancid Tomatillos movie trailer page', () => {
  it('should be able to visit the movie trailer page', () => {
    cy.get('header')
      .contains('Rancid Tomatillos')
      .should('be.visible')
      .should('have.css', 'font-family')
      .and('match', /Rubik Glitch/)
  });

  it('should be able to navigate to the movies page', () => {
    cy.get('button')
      .should('have.class', 'view-btn')
      .contains('View All Movies')
      .click()
      .get('.random-movie-title')
  });

  it('should be able to navigate to the movie details page', () => {
    cy.get('button')
      .should('have.class', 'view-btn')
      .contains('View Movie Details')
      .click()
      .get('h1')
      .contains('The Owners')
  });

  it('should display a movie trailer video', () => {
    cy.get('iframe')
      .should('have.attr', 'title')
      .and('match', /YouTube video player/)
  });
});