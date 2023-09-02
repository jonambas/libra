describe('Preview', () => {
  it('should render default layout', () => {
    cy.visit('http://localhost:8080/preview.html');
    cy.findByText('Welcome to Libra!').should('exist');
  });

  it('should render an entry', () => {
    cy.visit('http://localhost:8080/preview.html', {
      qs: {
        entry: 'root--root-story-1'
      }
    });
    cy.findByText('root story 1').should('exist');
  });

  it('should render a color scheme', () => {
    cy.visit('http://localhost:8080/preview.html', {
      qs: {
        entry: 'root--root-story-1',
        scheme: 'dark'
      }
    });
    cy.get('html').should('have.attr', 'data-color-scheme', 'dark');
  });
});
