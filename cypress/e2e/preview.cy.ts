describe('Preview', () => {
  it('should render default layout', () => {
    cy.visit('http://localhost:9001/preview.html');
    cy.findByText('Welcome to Libra!').should('exist');
  });

  it('should render an entry', () => {
    cy.visit('http://localhost:9001/preview.html', {
      qs: {
        entry: 'root--root-story-1'
      }
    });
    cy.findByText('root story 1').should('exist');
  });

  it('should render a dark color scheme with default layout', () => {
    cy.visit('http://localhost:9001/preview.html', {
      qs: {
        entry: 'root--root-story-1',
        scheme: 'dark'
      }
    });
    cy.get('#root').should('have.css', 'background-color', 'rgb(24, 24, 26)');
  });

  it('should render a light color scheme with default layout', () => {
    cy.visit('http://localhost:9001/preview.html', {
      qs: {
        entry: 'root--root-story-1',
        scheme: 'light'
      }
    });
    cy.get('#root').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });
});
