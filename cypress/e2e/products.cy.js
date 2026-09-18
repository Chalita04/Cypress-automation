describe('Cart and Checkout Flow', () => {
  it('ดำเนินการสั่งซื้อสำเร็จ', () => {
    cy.login('standard_user', 'secret_sauce')

    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')

    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.title').should('have.text', 'Your Cart')

    cy.get('.checkout_button').should('have.text', 'Checkout').click()

    cy.get('#first-name').type('Chali')
    cy.get('#last-name').type('ta')
    cy.get('#postal-code').type('40000')

    cy.get('#continue').should('have.value', 'Continue').click()
    cy.get('#finish').should('have.text', 'Finish').click()
    cy.get('#generate-pdf-order').should('have.text', 'Generate PDF order').click()
    cy.get('#back-to-products').should('have.text', 'Back Home').click()
  })

  it('ดำเนินการสั่งซื้อด้วยรหัสไปรษณีย์ที่ไม่ใช่ตัวเลข', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.checkout_button').click()

    cy.get('#first-name').type('Chali')
    cy.get('#last-name').type('ta')
    cy.get('#postal-code').type('ABCDE') 

    cy.get('#continue').should('have.value', 'Continue').click()
    cy.get('#finish').should('have.text', 'Finish').click()
    cy.get('#back-to-products').should('have.text', 'Back Home').click()
  })

  it('ลบสินค้าที่เลือกสำเร็จในหน้า Your Cart', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove').click()
  })

  it('ลบสินค้าออกจากตะกร้าสำเร็จในหน้า Products', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove').click()
  })

  it('กรองชื่อสินค้าจาก A ไป Z', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="product-sort-container"]').select('az')
  })

  it('กรองชื่อสินค้าจาก Z ไป A', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="product-sort-container"]').select('za')
  })

  it('กรองชื่อสินค้าจากราคาต่ำไปสูง', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="product-sort-container"]').select('lohi')
  })

  it('กรองชื่อสินค้าจากราคาสูงไปต่ำ', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="product-sort-container"]').select('hilo')
  })


})