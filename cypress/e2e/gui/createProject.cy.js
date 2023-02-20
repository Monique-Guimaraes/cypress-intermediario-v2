import { faker } from '@faker-js/faker' // biblioteca faker gera dados aleatórios

const options = { env: { snapshotOnly: true } }

describe('Create Project', options, () => {
    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
    })

    it('successfully', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`, //cria projeto com nome aleatorio
            description: faker.random.words(5) //cria a descrição com palavras aleatórias 
        }

        cy.gui_createProject(project)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    })
})