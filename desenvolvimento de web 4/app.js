// ==========================================
// BLOCO 1 – Arrays e Métodos (map, filter, reduce, forEach)
// ==========================================

console.log("--- BLOCO 1 ---");

// 1. Array nomes, forEach e map
const nomes = ["Ana", "Carlos", "Beatriz"];

nomes.forEach(nome => {
  console.log(`Olá, ${nome}!`);
});

const nomesMaiusculas = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculas);

// 2. Array precos, filter e reduce
const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter(preco => preco > 20);
console.log("Preços acima de 20:", precosAcimaDe20);

const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma de todos os preços:", somaPrecos);

// 3. Array de objetos produtos, map, filter, reduce e forEach
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 80 },
  { nome: "Caneta", preco: 5 },
  { nome: "Livro", preco: 45 }
];

const nomesProdutos = produtos.map(p => p.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter(p => p.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const totalProdutos = produtos.reduce((acc, p) => acc + p.preco, 0);
console.log("Preço total dos produtos:", totalProdutos);

produtos.forEach(p => {
  console.log(`Nome: R$ ${p.preco}`);
});


// ==========================================
// BLOCO 2 – Manipulação do DOM
// ==========================================

console.log("\n--- BLOCO 2 ---");

// 1. Seleção do h1 (#titulo) e alteração do texto
const titulo = document.querySelector("#titulo");
if (titulo) {
  titulo.textContent = "Blog do [seu nome]";
}

// 2. Seleção de todos os parágrafos (.texto) com querySelectorAll
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log("Texto do parágrafo:", p.textContent));

// 3. Seleção de #lista e innerHTML para inserir 2 itens
const lista = document.querySelector("#lista");
if (lista) {
  lista.innerHTML = "<li>Primeiro item inserido</li><li>Segundo item inserido</li>";
}

// 4. Criando um <li> com createElement e adicionando à #lista com append
const novoLi = document.createElement("li");
novoLi.textContent = "Terceiro item";
lista.append(novoLi);

// 5. Adicionando classe destaque com classList.add e verificando com classList.contains
novoLi.classList.add("destaque");
console.log("Possui a classe 'destaque'?", novoLi.classList.contains("destaque"));

// 6. Array tarefas, forEach para criar <li> e classList no primeiro item
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach((tarefaText, index) => {
  const liTarefa = document.createElement("li");
  liTarefa.textContent = tarefaText;
  
  if (index === 0) {
    liTarefa.classList.add("feito");
  }
  
  lista.append(liTarefa);
});

console.log("Total de itens na lista (li):", document.querySelectorAll("li").length);


// ==========================================
// BLOCO 3 – Eventos e Event Delegation
// ==========================================

console.log("\n--- BLOCO 3 ---");

// 1. Listener de click no #botao
const botao = document.querySelector("#botao");
if (botao) {
  botao.addEventListener("click", () => {
    console.log("Clicou!");
  });

  // 2. Listener de mouseover no #botao
  botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
  });
}

// 3. Listener de keyup no campo #nome
const campoNome = document.querySelector("#nome");
if (campoNome) {
  campoNome.addEventListener("keyup", (e) => {
    console.log("Valor do campo nome:", e.target.value);
  });
}

// 4. Event Delegation na #lista
if (lista) {
  lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("feito");
      console.log("Texto do item clicado:", e.target.textContent);
    }
  });
}

// 5. Formulário de inclusão de tarefa
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

if (formulario && campoTarefa) {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    const textoFormatado = campoTarefa.value.trim();

    if (textoFormatado !== "") {
      const novaLi = document.createElement("li");
      novaLi.textContent = textoFormatado;
      lista.append(novaLi);
      campoTarefa.value = ""; // Limpa o campo
    }
  });
}
