//concat() = une 2 arrays

let lista1 = ["banana", "manga", "abacaxi"];

let lista2 = ["leite", "gelo", "açúcar"];

let batidaDeFruta = lista1.concat(lista2);

console.log(batidaDeFruta);

//find() = acha elementos em uma lista

let lista3 = ["leite", 3, true, "pão", "queijo", false, 5, 106];

let achar = lista3.find(String);

console.log(achar);

console.log(lista3.findIndex(Number)); //findIndex() - retorna o index do objeto procurado

console.log(lista3.lastIndexOf(true)); //lastIndexOf() - returna o último index do objeto procurado

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (number, index) {
  console.log(`${number} e ${index}`);
}); //funciona como o for()

console.log(numbers.shift()); //remove o primeiro elemento da lista

console.log(numbers);

console.log(numbers.push(11)); //adiciona um último elemento na lista e retorna o index

console.log(numbers);

console.log(numbers.unshift(1)); ////adiciona um primeiro elemento na lista e retorna o index

console.log(numbers);

//let newNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// slice () = divide a uma lista

let alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinicius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

let sala1 = alunos.slice(0, alunos.length / 2);
let sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);

let alunos2 = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

alunos2.splice(1, 2, "Rodrigo"); //remove itens e adiciona novos

console.log(alunos2);

//lista de duas dimensões

let alunos3 = ["João", "Juliana", "Caio", "Ana"];

let medias = [10, 8, 7.5, 9];

let listaDeAlunosEMedias = [alunos3, medias];

console.log(
  `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]} e a média dela é ${listaDeAlunosEMedias[1][1]}`
); //acessando elementos de uma lista dentro de uma lista

//INCLUDES()

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) { //VERIFICA SE O OBJETO ESTÁ INCLUSO NA LISTA OU NÃO
    console.log(`${aluno} está matriculado`);
    const [alunos,medias] = listaDeAlunosEMedias;
    //equivale a:
    // const alunos4 = listaDeAlunosEMedias[0];
    // const medias2 = listaDeAlunosEMedias[1];
    let indice = alunos.indexOf(aluno); //acha o index do aluno procurado
    let mediaDoAluno = medias[indice]; //acessa a lista de notas e acessa a nota baseada no index do aluno procurado
    console.log(`A média do aluno é ${mediaDoAluno}`);
  } else {
    console.log("Aluno não encontrado");
  }
}

exibeNomeENota("Juliana");
