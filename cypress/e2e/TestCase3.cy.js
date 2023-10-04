describe("Test Case 3: Login User with incorrect email and password", () => {             

  it('Login User', () => {
      
    //2. Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')

    //3. Verify that home page is visible successfully
    cy.get('.nav.navbar-nav a').contains('Home').should('have.attr', 'style', 'color: orange;')

    //4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click()

    //5. Verify 'Login to your account' is visible
    cy.get('h2').contains('Login to your account').should('be.visible')  

    //6. Enter incorrect email address and password
    cy.get('form[action="/login"] input[name="email"]').type('lam@msn.com')
    cy.get('form[action="/login"] input[name="password"]').type('Lamri')

    //7. Click 'login' button
    cy.get('form[action="/login"]').submit()

    //8. Verify error 'Your email or password is incorrect!' is visible
    cy.get('form[action="/login"] p').contains('Your email or password is incorrect!').should('be.visible')
  })

})