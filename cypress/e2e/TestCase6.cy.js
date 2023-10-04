describe("Test Case 6: Contact Us Form", () => {             

  it('Contact Us Form', () => {
      
    //2. Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')

    //3. Verify that home page is visible successfully
    cy.get('.nav.navbar-nav a').contains('Home').should('have.attr', 'style', 'color: orange;')

    //4. Click on 'Contact Us' button
    cy.get('a[href="/contact_us"]').click()

    //5. Verify 'GET IN TOUCH' is visible
    cy.get('h2').contains('Get In Touch').should('be.visible')
    
    //6. Enter name, email, subject and message
    cy.get('input[name="name"]').type('Lamri')
    cy.get('input[name="email"]').type('lamrinx3@msn.com')
    cy.get('input[name="subject"]').type('Reclaim')
    cy.get('#message').type('I have nothing to say')

    //7. Upload file
    const fileName = 'TestCase6.txt'
    cy.get('input[name="upload_file"').selectFile(fileName)

    //8. Click 'Submit' button
    cy.get('#contact-us-form').submit()

    //9. Click OK button
    cy.on("window:confirm", (t) => {
      //verify text on pop-up
      expect(t).to.equal("Press OK to proceed!");
   });

    //10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    cy.get('.alert-success').contains('Success! Your details have been submitted successfully.').should('be.visible')

    //11. Click 'Home' button and verify that landed to home page successfully
    cy.get('a[href="/"]').contains('Home').click()
    cy.get('.nav.navbar-nav a').contains('Home').should('have.attr', 'style', 'color: orange;')
    
  })

})