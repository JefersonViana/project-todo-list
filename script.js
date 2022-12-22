const body = document.querySelector('body');
const header = document.createElement('header');
header.id = 'title';
header.innerText = 'Minha Lista de Tarefas';
const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
const input = document.createElement('input');
input.id = 'texto-tarefa';
const listaOrdenada = document.createElement('ol');
listaOrdenada.id = 'lista-tarefas';

body.appendChild(header);
body.appendChild(paragraph);
body.appendChild(input);
body.appendChild(listaOrdenada);