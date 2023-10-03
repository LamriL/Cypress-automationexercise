describe("Automation Exercise", () => {             


  it('Forms', () => {
      
      //2. Navigate to url 'http://automationexercise.com'
      cy.visit('https://automationexercise.com/')

      //3. Verify that home page is visible successfully
      cy.get('.nav.navbar-nav a').contains('Home').should('have.attr', 'style', 'color: orange;')
      
      //4. Click on 'Signup / Login' button
      cy.get('a[href="/login"]').click()

      //5. Verify 'New User Signup!' is visible
      cy.get('h2').contains('New User Signup!').should('be.visible')

      //6. Enter name and email address
      cy.get('[data-qa="signup-name"]').type('Lamri')
      cy.get('[data-qa="signup-email"]').type('lamrinx@msn.com')

      //7. Click 'Signup' button
      cy.get('form[action="/signup"]').submit()
      
  })

after(() => {
 
})

})