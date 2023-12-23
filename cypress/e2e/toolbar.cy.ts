describe('Toolbar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9001');
    cy.wait(50);
  });

  it('should render toolbar items', () => {
    cy.get('html').then((el) => {
      cy.findByRole('button', {
        name: `${el.data('color-scheme') === 'dark' ? 'Dark' : 'Light'} Mode`
      }).should('exist');
    });

    cy.findByRole('button', { name: 'Hide Sidebar' }).should('exist');
    cy.findByRole('link', { name: 'Preview Iframe' }).should('exist');
  });

  it('should toggle sidebar', () => {
    cy.findByRole('navigation').should('exist');
    cy.findByRole('button', { name: 'Hide Sidebar' }).click();
    cy.findByRole('navigation').should('not.exist');
    cy.findByRole('button', { name: 'Show Sidebar' }).click();
    cy.findByRole('navigation').should('exist');
  });

  it('sets theme', () => {
    cy.get('html').then((el) => {
      const scheme = el.data('color-scheme');

      cy.findByRole('button', {
        name: `${scheme === 'dark' ? 'Dark' : 'Light'} Mode`
      }).click();

      cy.get('html').should(
        'have.attr',
        'data-color-scheme',
        `${scheme === 'dark' ? 'light' : 'dark'}`
      );
    });
  });

  it('should generate preview iframe urls after clicking an entry', () => {
    cy.get('html').then((el) => {
      const scheme = el.data('color-scheme');

      cy.findByRole('link', { name: 'Preview Iframe' }).should(
        'have.attr',
        'href',
        `/preview.html?scheme=${scheme}`
      );
      cy.findAllByRole('link', { name: 'root story 1' }).click();
      cy.findByRole('link', { name: 'Preview Iframe' }).should(
        'have.attr',
        'href',
        `/preview.html?entry=root--root-story-1&scheme=${scheme}`
      );
    });
  });
});
