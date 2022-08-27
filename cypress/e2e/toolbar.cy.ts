describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('should render toolbar items', () => {
    cy.findByRole('button', { name: 'Hide Sidebar' }).should('exist');
    cy.findByRole('link', { name: 'Preview iFrame' }).should('exist');
    cy.findByRole('combobox').should('have.text', 'Theme: System');
  });

  it('should toggle sidebar', () => {
    cy.findByRole('navigation').should('exist');
    cy.findByRole('button', { name: 'Hide Sidebar' }).click();
    cy.findByRole('navigation').should('not.exist');
    cy.findByRole('button', { name: 'Show Sidebar' }).click();
    cy.findByRole('navigation').should('exist');
  });

  it('should set a theme', () => {
    cy.url().should('include', 'themePreference=system');

    cy.findByRole('combobox').click();
    cy.findAllByRole('option').should('have.length', 3);
    cy.findByRole('option', { name: 'Dark' }).click();

    cy.url().should('include', 'theme=dark');
    cy.url().should('include', 'themePreference=dark');

    cy.findByRole('link', { name: 'Preview iFrame' }).should(
      'have.attr',
      'href',
      '/preview.html?theme=dark&themePreference=dark'
    );

    cy.findByTitle('Libra Preview')
      .its('0.contentDocument.body')
      .within(() => {
        cy.findAllByText('Welcome to Libra!').should(
          'have.css',
          'color',
          'rgb(255, 255, 255)'
        );
      });
  });

  it('should generate preview iframe urls after clicking an entry', () => {
    cy.findByRole('link', { name: 'Preview iFrame' }).should(
      'have.attr',
      'href',
      '/preview.html?theme=light&themePreference=system'
    );
    cy.findAllByRole('link', { name: 'root story 1' }).click();
    cy.findByRole('link', { name: 'Preview iFrame' }).should(
      'have.attr',
      'href',
      '/preview.html?entry=root--root-story-1&theme=light&themePreference=system'
    );
  });
});
