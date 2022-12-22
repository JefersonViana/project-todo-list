const body = document.querySelector('body');
const header = document.createElement('header');
header.id = 'title';
header.innerText = 'Minha Lista de Tarefas';
const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
body.appendChild(header);
body.appendChild(paragraph);