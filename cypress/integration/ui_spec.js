describe('Bilderkennung Website', function () {
    it('is reachable and contains a headline', function () {
        cy.visit('')

        cy.get('h1').should('contain', 'B1lderkennung')
    })

    it('allows user to categorize text', function () {
        cy.visit('')

        var input = "Joshua"
        cy.get('#bild').type(input)
        

        cy.get('#button').click()

        cy.get('#category').should('be', 'Bild')

    })
})