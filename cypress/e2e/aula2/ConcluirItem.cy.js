import TelaInicial from '../../support/Pageobject'
describe('Concluir itens na lista do ToDo',()=>{
    BeforeEach(()=>{
        cy.visit('/')
        var TodoItens=["Maça","Banana","Cenoura"]
        TodoItens.forEach(function(item,indice,array){
            TelaInicial.inputText(item)
    })
    it('Concluir Item da Lista ToDo', () => {
        TelaInicial.ConcluirItem()
        })
    });   
})