let listaDeAmigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (!nome) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  listaDeAmigos.push(nome);
  input.value = "";
  exibirLista();
}

function exibirLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  listaDeAmigos.forEach((nome, indice) => {
    const li = document.createElement("li");
    li.textContent = nome;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerAmigo(indice);
    botaoRemover.style.marginLeft = "10px";

    li.appendChild(botaoRemover);
    ul.appendChild(li);
  });
}

function removerAmigo(indice) {
  listaDeAmigos.splice(indice, 1);
  exibirLista();
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert("A lista está vazia. Adicione nomes antes de realizar o sorteio.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSorteado = listaDeAmigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}