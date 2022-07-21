var botao = document.getElementById('botao');
var tarefas = document.getElementById('listaTarefas');
var conteudo = document.getElementById('input');
botao.addEventListener('click', () => {
    let tarefa = document.createElement('div');

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');


    tarefa.innerHTML = conteudo.value;
    tarefa.setAttribute('class', 'tarefa');
    tarefa.prepend(checkbox);


    tarefas.appendChild(tarefa)

});

checkbox.addEventListener('click', () => {
    checkbox.setAttribute('type', 'checkbox');

});


