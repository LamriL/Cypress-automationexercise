describe("Test Case 5: Register User with existing email", () => {             

  it('Register User', () => {
      
    //2. Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')

    //3. Verify that home page is visible successfully
    cy.get('.nav.navbar-nav a').contains('Home').should('have.attr', 'style', 'color: orange;')

    //4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click()

    //5. Verify 'New User Signup!' is visible
    cy.get('h2').contains('New User Signup!').should('be.visible')

    //6. Enter name and already registered email address
    cy.get('form[action="/signup"] input[name="name"]').type('Lamri')
    cy.get('form[action="/signup"] input[name="email"]').type('lamrinx3@msn.com')

    //7. Click 'Signup' button
    cy.get('form[action="/signup"]').submit()

    //8. Verify error 'Email Address already exist!' is visible
    cy.get('form[action="/signup"] p').contains('Email Address already exist!').should('be.visible')
    
  })

})