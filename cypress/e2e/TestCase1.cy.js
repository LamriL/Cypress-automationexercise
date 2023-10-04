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
      cy.get('[data-qa="signup-email"]').type('lamrinx2@msn.com')

      //7. Click 'Signup' button
      cy.get('form[action="/signup"]').submit()

      //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
      cy.get('h2 b').contains('Enter Account Information').should('be.visible')

      //9. Fill details: Title, Name, Email, Password, Date of birth
      cy.get('input[name="title"]').check('Mr')
      cy.get('#password').type('Lamri1234')
      cy.get('#days').select('23')
      cy.get('#months').select('November')
      cy.get('#years').select('1983')
      
      //10. Select checkbox 'Sign up for our newsletter!'
      cy.get('#newsletter').check('1')

      //11. Select checkbox 'Receive special offers from our partners!'
      cy.get('#optin').check('1')

      //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
      cy.get('#first_name').type('Lamri')
      cy.get('#last_name').type('LAIB')
      cy.get('#company').type('PEAKS')
      cy.get('#address1').type('3 rue Andre Mayer')
      cy.get('#country').select('Singapore')
      cy.get('#state').type('Rhône')
      cy.get('#city').type('Grigny')
      cy.get('#zipcode').type('69520')
      cy.get('#mobile_number').type('0623521220')

      //13. Click 'Create Account button'
      cy.get('form[action="/signup"]').submit()


      //14. Verify that 'ACCOUNT CREATED!' is visible
      cy.get('h2 b').contains('Account Created!').should('be.visible')

      //15. Click 'Continue' button

      //16. Verify that 'Logged in as username' is visible

      //17. Click 'Delete Account' button

      //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

      
      
  })

after(() => {
 
})

})