describe('URL', () => {
  it('should default to the home page', () => {
    cy.visit('http://localhost:9001');
    cy.url().should('include', 'entry=');
  });

  it('should load an entry with defaults', () => {
    cy.visit('http://localhost:9001', {
      qs: {
        entry: 'root--root-story-1'
      }
    });
    cy.url().should('include', 'entry=root--root-story-1&scheme=light');
  });

  it('should an entry with scheme', () => {
    cy.visit('http://localhost:9001', {
      qs: {
        entry: 'root--root-story-1',
        scheme: 'dark'
      }
    });
    cy.url().should('include', 'entry=root--root-story-1&scheme=dark');
  });
});
