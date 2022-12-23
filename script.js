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
const buttonClear = document.createElement('button');
buttonClear.innerText = 'Apagar Tudo!';
buttonClear.id = 'apaga-tudo';
const buttonRemoveItem = document.createElement('button');
buttonRemoveItem.innerText = 'Apagar tarefas Concluídas';
buttonRemoveItem.id = 'remover-finalizados';

body.appendChild(header);
body.appendChild(paragraph);
body.appendChild(input);
body.appendChild(button);
body.appendChild(listaOrdenada);
body.appendChild(buttonClear);
body.appendChild(buttonRemoveItem);

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

const completed = (event) => {
  const alvo = event.target;
  if (alvo.className == 'tarefas completed') {
    alvo.className = '';
  } else {
    alvo.className = 'tarefas completed';
  }
};

const clearList = () => {
  listaOrdenada.innerHTML = '';
};

const removeFinalizados = () => {
  const listaDeTarefas = document.getElementsByClassName('completed');
  for (let index = listaDeTarefas.length; index > 0; index--) {
    listaDeTarefas[index - 1].remove();
  }
};

// desta linha para baixo o código funciona, porém se eu inverter a ordem da erro.
// const removeFinalizados = () => {
//   const listaDeTarefas = document.getElementsByClassName('completed');
//   for (let index = listaDeTarefas.length; index >= 0; index--) {
//     console.log(listaDeTarefas[index]);
//     listaDeTarefas[index].remove()
//   }
// };
listaOrdenada.addEventListener('dblclick', completed);
buttonClear.addEventListener('click', clearList);
buttonRemoveItem.addEventListener('click', removeFinalizados);

