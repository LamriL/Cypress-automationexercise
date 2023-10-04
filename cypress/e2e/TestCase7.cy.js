describe("Test Case 7: Verify Test Cases Page", () => {             

  it('Test Cases Page', () => {
      
    //2. Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')

    //3. Verify that home page is visible successfully
    cy.get('.nav.navbar-nav a').contains('Home').should('have.attr', 'style', 'color: orange;')

    //4. Click on 'Test Cases' button
    cy.get('ul[class="nav navbar-nav"] li a[href="/test_cases"]').click()

    //5. Verify user is navigated to test cases page successfully
    cy.get('ul[class="nav navbar-nav"] li a[href="/test_cases"]').contains('Test Cases').should('have.attr', 'style', 'color: orange;')
    cy.get('h2 b').contains('Test Cases').should('be.visible') 

  })

})