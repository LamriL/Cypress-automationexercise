describe("Test Case 8: Verify All Products and product detail page", () => {             

  it('Verify All Products', () => {
      
    //2. Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')

    //3. Verify that home page is visible successfully
    cy.get('.nav.navbar-nav a').contains('Home').should('have.attr', 'style', 'color: orange;')

    //4. Click on 'Products' button
    cy.get('ul[class="nav navbar-nav"] li a[href="/products"]').click()

    //5. Verify user is navigated to ALL PRODUCTS page successfully
    cy.get('ul[class="nav navbar-nav"] li a[href="/products"]').should('have.attr', 'style', 'color: orange;')
    cy.get('h2').contains('All Products').should('be.visible') 

    //6. The products list is visible
    cy.get('.features_items').should('be.visible')

    //7. Click on 'View Product' of first product
    //cy.get('a[href="/product_details/1"]').click()
    cy.get('.choose').first().click()

    //8. User is landed to product detail page
    
    //9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

  })

})