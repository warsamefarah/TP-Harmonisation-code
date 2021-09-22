describe('Component test', () => {
    beforeEach(() => cy.visit('http://localhost:8080/'));

    it('should verify lucas component title', () => {
      cy.get('.lucas-title').should('contain', 'Salut c Lucas').and('be.visible');
    })

    it('should see if counter work', () => {
      cy.get('.button-counter').click()
      cy.get('.counter').should('contain', '1')
      

      cy.get('.button-counter').click()
      cy.get('.counter').should('contain', '2')
    })
  })