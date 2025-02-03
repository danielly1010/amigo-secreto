//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome");
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    limparCampo(input);
}

function limparCampo(input) {
    input.value = "";
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li style="color: green;">O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}