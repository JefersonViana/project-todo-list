const body = document.querySelector('body');
const header = document.createElement('header');
header.id = 'title';
header.innerText = 'Minha Lista de Tarefas';
const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
const input = document.createElement('input');
input.id = 'texto-tarefa';
const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'Criar tarefa';
const listaOrdenada = document.createElement('ol');
listaOrdenada.id = 'lista-tarefas';

body.appendChild(header);
body.appendChild(paragraph);
body.appendChild(input);
body.appendChild(button);
body.appendChild(listaOrdenada);

const listarTarefa = () => {
  const tarefa = input.value;
  const criarItem = document.createElement('li');
  criarItem.className = 'tarefas';
  criarItem.innerText = tarefa;
  listaOrdenada.appendChild(criarItem);
  input.value = '';
};

button.addEventListener('click', listarTarefa);


const addEstilo = (event) => {
  const alvo = event.target;
  const listaDeTarefas = document.querySelectorAll('.tarefas');
  for (let index = 0; index < listaDeTarefas.length; index += 1) {
    listaDeTarefas[index].style.backgroundColor = '';
  }
  alvo.style.backgroundColor = 'gray';
};

listaOrdenada.addEventListener('click', addEstilo);