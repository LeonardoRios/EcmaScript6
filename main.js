//alert("teste");

/* Criando uma class para que o bundle converta em um padrão antigo caso o navegador não conheça */
class Teste{

    metodo(){

    }

    outroMetodo(){
        
    }
    
} 


class TodoList{

    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }

}

const minhaLista = new TodoList();

document.getElementById("novoTodo").onclick = function(){
    minhaLista.addTodo();
}
