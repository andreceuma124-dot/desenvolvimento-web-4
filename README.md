# Desafios Práticos: Arrays, DOM e Eventos em JavaScript

Este projeto contém a resolução dos desafios de manipulação de Arrays, manipulação da árvore DOM e gerenciamento de Eventos em JavaScript.

## Métodos de Array Utilizados

- **`map`**: Utilizado para transformar um array original em um novo array com a mesma quantidade de elementos, aplicando uma função de transformação em cada item (ex: converter strings para maiúsculas ou extrair propriedades de objetos).
- **`filter`**: Cria um novo array apenas com os elementos do array original que atendem a uma condição booleana específica (ex: preços acima ou abaixo de determinado valor).
- **`reduce`**: Acumula os valores de um array em um único resultado final (ex: somar todos os preços de uma lista).
- **`forEach`**: Executa uma função de callback para cada elemento do array, usado principalmente para efeitos colaterais sem retornar um novo array (ex: imprimir logs ou iterar para criar elementos no DOM).

## Manipulação do DOM

A manipulação da estrutura HTML foi realizada através dos seguintes conceitos:
- **Seleção de Elementos**: Uso de `querySelector` para selecionar elementos individuais e `querySelectorAll` para capturar coleções de elementos.
- **Criação e Inserção**: Uso de `document.createElement()` para instanciar novas tags HTML (como `<li>`) dinamicamente e `.append()` para adicioná-las aos nós da página.
- **Estilização Dinâmica**: Manipulação de classes através de `classList.add()`, `classList.contains()` e `classList.toggle()`.

## Event Delegation (Delegação de Eventos)

O **Event Delegation** consiste em adicionar um único ouvinte de eventos (*event listener*) a um elemento pai (neste projeto, a tag `<ul>`), em vez de adicionar ouvintes individuais para cada elemento filho (`<li>`).

### Importância e Benefícios:
1. **Performance**: Reduz o número de ouvintes na memória, otimizando o uso do navegador em listas com muitos itens.
2. **Elementos Dinâmicos**: Permite que novos elementos criados dinamicamente no DOM (como novos `<li>` adicionados através do formulário) automaticamente respondam aos eventos de clique sem a necessidade de reanexar novos eventos a eles.
