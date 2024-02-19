import TelaInicial from '../../support/Pageobject'

describle('Analisando contexto ToDo',()=>{
       context('Validar a tela inicial',()=>{
         beforeEach(() => {
             cy.visit('/');
         });
         it('Validar área Label de input de dados', () => {
             TelaInicial.ValidarInput("What needs to be done?")
         });
       })
       context('Validar adição de teste',()=>{
              beforeEach(() => {
                  cy.visit('/')
              });
              it('Adicionar mais de um item na lista', () => {
                var TodoItens=["Maça","Banana","Cenoura"]
                TodoItens.forEach(function(item,indice,array){
                    TelaInicial.inputText(item)
                 TelaInicial.ValidarContador(3)   
                })})
       })
       context('Validar a conclusão de itens',()=>{
        BeforeEach(()=>{
          cy.visit('/')
          var TodoItens=["Maça","Banana","Cenoura"]
          TodoItens.forEach(function(item,indice,array){
              TelaInicial.inputText(item)
      })
      it('Concluir Item da Lista ToDo', () => {
        TelaInicial.ConcluirItem()
        TelaInicial.ValidarContador(2)
        })
    
    })
       })
       context('Validar a filtro de itens',()=>{
        BeforeEach(()=>{
          cy.visit('/')
          var TodoItens=["Maça","Banana","Cenoura"]
          TodoItens.forEach(function(item,indice,array){
              TelaInicial.inputText(item)
          TelaIncial.ConcluirItem()
      })
        it('Validar lista de itens ativos', () => {
          TelaInicial.FiltrarItem("Completed")
          TelaInicial.ValidarSizeTodo(2)
        });
        it('Validar a lista de itens concluidos', () => {
            TelaInicial.ValidarSizeTodo(1)
        });
       })
      })
       context('Validar a remoção de itens',()=>{

       })
})