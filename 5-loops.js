//Há dois tipos de loops: O While e o For

//O WHILE: while (condição for verdadeira){executar isso};
//FOR: for (inicio; condição;passo){executar isso};

//EXEMPLOS COM WHILE

let aNumber = 2;
let goalNumber = 50;

while (aNumber <= goalNumber) {
  //Explicando: "enquanto" 2 for MENOR OU IGUAL a 50;
  console.log(aNumber); //"imprima o número
  aNumber++; //E adicione 1 até satisfazer o loop
}

//A MESMA OPERAÇÃO COM FOR

for (aNumber; aNumber <= goalNumber; aNumber++) {
  //Comece no número 2 e enquanto ele for menor ou igual a 50, adicione um, enquanto não satisfazer o loop
  console.log(aNumber); //imprima o número
}

//USANDO LISTAS

let secondGenPokemonTeam = new Array(
  "Corsola",
  "Qwilfish",
  "Noctowl",
  "Forretress",
  "Heracross",
  "Houndoom"
);

let mvpPokemon = "Heracross";

let i = 0;

while (secondGenPokemonTeam[i] !== mvpPokemon) {
  console.log("Não é esse");
  i++;
}

for (i; secondGenPokemonTeam[i] !== mvpPokemon; i++) {
  console.log("Não é esse");
}

const numeros = [100, 200, 300, 400, 500, 600];

for (let index = 0; index < numeros.length; index++) {
  console.log(`O número na posição ${index} é ${numeros[index]}`);
}

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

//FOR OF();

let somaDasNotas2 = 0;

for (let elemento of notas) { //para cada elemento da lista, faça algo
    somaDasNotas2 += elemento;
}

console.log("A média das notas é" , somaDasNotas2 / notas.length);