import { FILTRO } from '../Elements/TelaInicial.elements';

const elem= require('../Elements/TelaInicial.elements').ELEMENTS
const ConcluirItem=require('../Elements/TelaInicial.elements').ITENS
const FiltrarItem=require('../Elements/TelaInicial.elements').FILTRO
class TelaInicial{

   inputText(dado){
    cy.get(elem.inputToDo).type(dado).type('{enter}')

}
   ValidarInput(texto){
    cy.get(elem.inputToDo).should('have.attr','placeholder').and ('include',texto);
   }

    ConcluirItem(){
     cy.get(ConcluirItem.buttonConcluirItem).first().click();
    }
    FiltrarItem(menu){
        cy.get(FiltrarItem.FiltroToDo).contains(menu).and('be.visible').click()
    }
    DeletarItem(){
        cy.get(ConcluirItem.ListaItens).first().find().invoke('show').click()
    }
    ValidarContador(numero){
        cy.get(FiltrarItem.ContadorToDO).find('strong');
    }
    ValidarSizeToDo(numero){
        cy.get(ConcluirItem.ValidarListaItens).should('have.lengt',numero);

    }
}   
export default new TelaInicial();
