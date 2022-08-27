describe('Preview', () => {
  it('should render default layout', () => {
    cy.visit('http://localhost:8080/preview.html');
    cy.findByText('Welcome to Libra!').should('exist');
  });

  it('should render default layout in dark mode', () => {
    cy.visit('http://localhost:8080/preview.html', {
      qs: {
        theme: 'dark'
      }
    });
    cy.findByText('Welcome to Libra!').should('have.css', 'color', 'rgb(255, 255, 255)');
  });

  it('should render an entry', () => {
    cy.visit('http://localhost:8080/preview.html', {
      qs: {
        entry: 'root--root-story-1'
      }
    });
    cy.findByText('root story 1').should('exist');
  });
});
