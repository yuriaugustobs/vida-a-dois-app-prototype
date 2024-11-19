function showLogo(){
    const logoAnimation = document.querySelector ('.logo');
    logoAnimation.classList.add('visible');
}

document.addEventListener("DOMContentLoaded", showLogo);

//javascript para interagir com a pagina de Lista de compras.
// vamos adicionar um evento de clieque, para chamar a funcao ao ser clicado.
// a funcao devera capturar os valores de nome e quantidade do item.
// a seguir, deverar criar um elemento DIV, onte sera criado o texto com nome e quantidade.
// apos isso, devera ser criado um botao para que possa ser removido o item da lista.
// apos o item ser adicionado, os campos de entradas devem ser limpos.
// uma melhoria sera adicionar um botao para edição do item.
// apos isso, devera ser criado um botao redondo para ser o "checked" do item.
//esse botao é redondo com borda roxa, e apos clicado deveria ficar todo verde, com um
//check em branco, dentro dele.
//ao clicar novamente, ele volta ao estado inicial.
// ao estar em estado de checked, o texto devera ficar riscado.
//abaixo vamos fazer o desenvolvimento com foco em aprendizado.

//criacao do evento de click!
document.getElementById('button-add-shopping').addEventListener('click', function() {
    const nomeItem =  document.getElementById ('input-shopping-item').value;
    const quantidadeItem =  document.getElementById ('input-item-quantity').value;

//criando um novo item para ser mostrado na lista
const novoItem = document.createElement('div');
novoItem.textContent =  `${nomeItem} - Quantidade: ${quantidadeItem}`;

//adicionado o item na lista
document.getElementById('container-shopping-list').appendChild(novoItem);

//adicionado um botao check para o item novo.
const unchecked = document.createElement('button');
unchecked.innerHTML = '<img src="/assets/unchecked.svg" alt="unchecked">'
unchecked.Classli



//adicionando um classe de estilos para o novo item
novoItem.classList.add('estilo-novo-item');

//limpando os inputs
document.getElementById('input-shopping-item').value = '';
document.getElementById('input-item-quantity').value = '';
});

