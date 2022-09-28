/// <reference types="Cypress" />

//const { get } = require("cypress/types/lodash")

describe('acceso a web', () => {

  it('cargar pagina', () => {
    cy.visit('http://127.0.0.1:8080')
  });

  it('carga titulo', () => {
    cy.get('#titulo').should('include.text', 'En total')
  })
});

describe('revisión paginador', () => {

  it('cantidad de paginas', () => {
cy.get('.page-item').should('have.length',60)
  })
})