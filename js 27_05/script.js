let contador = 0;

function adicionarTarefa() {
    // constantes
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById('mensagem');
    const listaTarefas = document.getElementById('lista_tarefas');

    // Variaveis
    let tarefa = inputElement.value;
    let mensagem, cor;


    if (tarefaValida(tarefa)) {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        contador = contador + 1;
        mensagem= "Total de tarefas (" + contador + ")"
        cor = 'green';
        // mensagem = "Adicionado com sucesso";
        
    }
    else {
        mensagem = "Tarefa inválida, redigite.";
        cor = 'red';
    }

    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;

    inputElement.value = '';
    inputElement.focus();
}

function limparTarefas() {
    const listaTarefas = document.getElementById('lista_tarefas');
    const mensagemElement = document.getElementById('mensagem');

    listaTarefas.innerHTML = '';
    contador = 0;

    mensagemElement.textContent = 'Lista limpa!';
    mensagemElement.style.color = 'blue';
}
function tarefaValida(tarefa) {
    return tarefa.trim().length >= 5
}


