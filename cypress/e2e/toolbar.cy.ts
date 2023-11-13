describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9001');
  });

  it('should render toolbar items', () => {
    cy.findByRole('button', { name: 'Hide Sidebar' }).should('exist');
    cy.findByLabelText('Select color scheme').should('exist');
    cy.findByRole('link', { name: 'Preview iFrame' }).should('exist');
  });

  it('should toggle sidebar', () => {
    cy.findByRole('navigation').should('exist');
    cy.findByRole('button', { name: 'Hide Sidebar' }).click();
    cy.findByRole('navigation').should('not.exist');
    cy.findByRole('button', { name: 'Show Sidebar' }).click();
    cy.findByRole('navigation').should('exist');
  });

  it('sets theme', () => {
    cy.get('html').should('have.attr', 'data-color-scheme', 'light');
    cy.findByLabelText('Select color scheme').click();
    cy.findByText('Dark').click();
    cy.get('html').should('have.attr', 'data-color-scheme', 'dark');
  });

  it('should generate preview iframe urls after clicking an entry', () => {
    cy.findByRole('link', { name: 'Preview iFrame' }).should(
      'have.attr',
      'href',
      '/preview.html?scheme=light'
    );
    cy.findAllByRole('link', { name: 'root story 1' }).click();
    cy.findByRole('link', { name: 'Preview iFrame' }).should(
      'have.attr',
      'href',
      '/preview.html?entry=root--root-story-1&scheme=light'
    );
  });
});
