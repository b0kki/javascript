/// <reference types="cypress">

describe('testes para lista de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('should fill the form and add to the list', () => {
        cy.get('[type="text"]').type('benji del rei')
        cy.get('[type="email"]').type('bokkinho@gmail')
        cy.get('[type="tel"]').type('11 96666-6666')
        cy.get('.adicionar').click()
    })

    it('should delete the first contact', () => {
        cy.get('.delete').first().click()
    })

    it('should edit the contact', () => {
        cy.get('.edit').last().click()
        cy.get('[type="email"]').type('.com')
        cy.get('.alterar').click()
    })
})