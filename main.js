//alert("teste");

/* Criando uma class para que o bundle converta em um padr�o antigo caso o navegador n�o conhe�a */
class Teste{

    metodo(){

    }

    outroMetodo(){
        
    }
    
} 


class List{

    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List{

    constructor(){
        super();

        this.usuario = 'Leonardo';
    }


    mostraUsuario(){
        console.log(this.usuario);
    }
    
}

const minhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    minhaLista.add('Novo Todo');
}



