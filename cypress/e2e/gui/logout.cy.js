describe('Logout', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/') // a barra passada dentro, significa que é no localhost
    })

    it('Logado com sucesso, hora de sair!', () => {
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`) //redirecionado para a tela de login
    })
})