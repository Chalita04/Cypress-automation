describe('Login Feature Test', () => {
  it('ล็อกอินปกติสำเร็จ', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

  it('แสดงข้อความผิดพลาดเมื่อใช้รหัสผ่านผิด', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrong_password')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('แสดงข้อความผิดพลาดเมื่อใช้บัญชีที่ถูกล็อก', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
  })

})