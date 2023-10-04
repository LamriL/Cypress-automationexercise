describe("Test Case 4: Logout User", () => {             

  it('Logout User', () => {
      
    //2. Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')

    //3. Verify that home page is visible successfully
    cy.get('.nav.navbar-nav a').contains('Home').should('have.attr', 'style', 'color: orange;')

    //4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click()

    //5. Verify 'Login to your account' is visible
    cy.get('h2').contains('Login to your account').should('be.visible')  

    //6. Enter correct email address and password
    cy.get('form[action="/login"] input[name="email"]').type('lamrinx3@msn.com')
    cy.get('form[action="/login"] input[name="password"]').type('Lamri1234')

    //7. Click 'login' button
    cy.get('form[action="/login"]').submit()

    //8. Verify that 'Logged in as username' is visible
    cy.get('ul[class="nav navbar-nav"] li a').contains('Logged in as').should('be.visible')
    cy.get('ul[class="nav navbar-nav"] li a b').contains('Lamri').should('be.visible')

    //9. Click 'Logout' button
    cy.get('a[href="/logout"]').click()

    //10. Verify that user is navigated to login page 
    cy.get('h2').contains('Login to your account').should('be.visible') 
    
  })

})