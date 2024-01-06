console.log("Listas");

const listaDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(listaDestinos);

listaDestinos.push(`Curitiba`);

console.log(listaDestinos);

const carros = []; //Outro jeito de criar listas
carros[0] = "Fusca";
carros[1] = "Jipe";
carros[2] = "Caminhonete";

console.log(carros);

let carroAntigo = carros[0]; //Acessar um elemento de uma lista através de seu index(posição)

console.log(carroAntigo);

const frutas = new Array (
    "Banana",
    "Laranja",
    "Maçã",
    "Manga"
)

let outroJeitoFrutas = frutas.toString(); //Transformar listas em Strings

console.log(outroJeitoFrutas);

//Listas (Arrays) são um tipo especial de objeto. Enquanto os objetos usam nomes para acessar elementos, as Arrays usam números.
//Exemplo:

const pessoaLista = ["Vanessa", "Forin", 26];

const pessoaObjeto = {primeiroNome: "Vanessa", sobrenome: "Forin", idade: 26}; //Objeto usa chaves

let idade = pessoaObjeto.idade
let nome = pessoaLista[0];

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`); //Para interpolação de variáveis, deve-se usar crases

//PROPRIEDADES E MÉTODOS DE UMA LISTA

const pokemonTeam = new Array (
    "Milotic",
    "Minior",
    "Slowbro",
    "Gastrodon",
) 

console.log(pokemonTeam.length); //Número de elementos de uma lista
console.log(pokemonTeam[2]); //Acessando um dos elementos da lista usando seu index numérico
console.log(pokemonTeam[pokemonTeam.length - 1]); //Acessando o último elemento da lista.

pokemonTeam.push("Mothim"); //Adiciona um elemento no final da lista

console.log (pokemonTeam);

pokemonTeam[5] = "Dugtrio"; //Adicionar item numa index especifica

console.log (pokemonTeam);

pokemonTeam[0] = "Bronzong"; //Substitui o item

console.log (pokemonTeam);

pokemonTeam.pop(); //Remove o último item da lista 

console.log(pokemonTeam);

pokemonTeam.shift(); //Remove o primeiro item da lista

console.log(pokemonTeam);

pokemonTeam.splice(1,1); //Remove itens especificos, sendo o primeiro número o index e o segundo a quantidade de elementos a remover a partir dele

console.log(pokemonTeam);

pokemonTeam.splice(0,2);

console.log(pokemonTeam);

const firtsGenPokemonTeam = new Array ("Raticate", "Slowbro", "Flareon", "Muk", "Jolteon" , "Machamp");

console.log(firtsGenPokemonTeam.sort()); //Organiza os itens em ordem alfabética
console.log(firtsGenPokemonTeam.reverse()); //Organiza os itens em ordem reversa alfabética

//Sort só funciona normalmente com strings, para números, se usa outra maneira, a de comparação

const randomNumb = new Array (1, 50, 34, 95, 36, 73, 100, 169, 250);

let cres = randomNumb.sort(function(a,b) {return a-b}); //Ordem Crescente

console.log(cres);

let des = randomNumb.sort(function(a,b) {return b-a}); //Ordem Decrescente 

console.log(des);






