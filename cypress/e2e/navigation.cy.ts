describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('should render title', () => {
    cy.findByRole('heading', { level: 1 }).should('have.text', 'Example Title');
  });

  it('should render nav items', () => {
    cy.findByRole('navigation').within(() => {
      cy.findAllByRole('link').should('have.length', 2);
      cy.findAllByRole('button').should('have.length', 2);
      cy.findAllByRole('link').first().should('have.text', 'root story 1');
      cy.findAllByRole('link').last().should('have.text', 'root story 2');
      cy.findAllByRole('button').first().should('have.text', 'file 2');
    });
  });

  it('should expand a folder', () => {
    cy.findByRole('navigation').within(() => {
      cy.findAllByRole('button').first().click();
      cy.findAllByRole('link').should('have.length', 5);
      cy.findAllByRole('button').should('have.length', 2);
    });
  });

  it('should search', () => {
    cy.findByLabelText('Search').type('3');
    cy.findByRole('navigation').within(() => {
      cy.findAllByRole('link').should('have.length', 2);
      cy.findAllByRole('button').should('have.length', 2);
      cy.findAllByRole('link').first().should('have.text', 'story 3');
      cy.findAllByRole('button').first().should('have.text', 'file 2');
    });
  });

  it('should show no results', () => {
    cy.findByLabelText('Search').type('nope');
    cy.findByRole('navigation').within(() => {
      cy.findAllByRole('link').should('have.length', 0);
      cy.findAllByRole('button').should('have.length', 0);
      cy.findByText('No Results').should('exist');
    });
  });

  it('should navigate to an item', () => {
    cy.url().should('not.include', 'entry=');
    cy.findByRole('navigation').within(() => {
      cy.findAllByRole('link').first().click();
    });
    cy.url().should('include', 'entry=root--root-story-1');

    cy.findByTitle('Libra Preview')
      .its('0.contentDocument.body')
      .should('contain.text', 'root story 1');
  });

  it('should navigate to an item in a folder', () => {
    cy.url().should('not.include', 'entry=');
    cy.findByRole('navigation').within(() => {
      cy.findAllByRole('button').first().click();
      cy.findAllByRole('link').first().click();
    });
    cy.url().should('include', 'entry=root__file-2--story-1');

    cy.findByTitle('Libra Preview')
      .its('0.contentDocument.body')
      .should('contain.text', 'folder 1 story 1');
  });
});
