describe('Burger Menu Feature Test', () => {

  it('ล็อกเอาต์สำเร็จ', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')

    cy.get('#react-burger-menu-btn').click()

    cy.get('#logout_sidebar_link').should('be.visible').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('#login-button').should('be.visible')
  })

})