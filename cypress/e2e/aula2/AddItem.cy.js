import TelaInicial from '../../support/Pageobject'
describe('Adicionar Itens na minha lista ToDo',()=>{
    BeforeEach(()=>{
        cy.visit('/')
    })
    it('Adicionando Input', () => {
       TelaInicial.inputText("dado1")
       })
    it('Adicionar mais de um item na lista', () => {
        var TodoItens=["Maça","Banana","Cenoura"]
        TodoItens.forEach(function(item,indice,array){
            TelaInicial.inputText(item)
        })
    });   
})