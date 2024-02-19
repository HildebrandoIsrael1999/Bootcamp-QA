import TelaInicial from '../../support/Pageobject'
describe('Suite de Teste Exemplo', () => {
    it('Deve visitar a página inicial', () => {
     cy.visit('https://www.todoMVC.com');
     TelaInicial.inputText()
    })
    });