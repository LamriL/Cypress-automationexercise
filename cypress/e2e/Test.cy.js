describe("Automation Exercise", () => {             

    it('Forms', () => {
        cy.visit('https://automationexercise.com/')

        cy.get('a[href="/login"]').click()
        cy.get('form[action="/login"] input[name="email"]').type('lamrinx4@msn.com')
        cy.get('form[action="/login"] input[name="password"]').type('Lamri1234')
        cy.get('form[action="/login"]').submit()

        cy.get('ul[class="nav navbar-nav"] li a').contains('Logged in as').should('be.visible')
        cy.get('ul[class="nav navbar-nav"] li a b').contains('Lamri').should('be.visible')

    })

})