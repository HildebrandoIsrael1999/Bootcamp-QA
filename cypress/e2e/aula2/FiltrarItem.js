import TelaInicial from '../../support/Pageobject'
describe('Validar os filtros de adição, após adc de itens',()=>{
    BeforeEach(()=>{
        cy.visit('/')
        var TodoItens=["Maça","Banana","Cenoura"]
        TodoItens.forEach(function(item,indice,array){
            TelaInicial.inputText(item)
        TelaIncial.ConcluirItem()
    })
    it('Filtrar itens ativos', () => {
        TelaInicial.FiltrarItem("Active")
        })
    it('Filtrar itens concluidos', () => {
        
    });
    });   
})