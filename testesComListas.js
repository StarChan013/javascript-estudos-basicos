
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
    console.log(`${number} e ${index}`)
}); //funciona como o for()


console.log(numbers.shift()); //remove o primeiro elemento da lista 

console.log(numbers);

console.log(numbers.push(11)); //adiciona um último elemento na lista e retorna o index

console.log(numbers);

console.log(numbers.unshift(1)); ////adiciona um primeiro elemento na lista e retorna o index

console.log(numbers);

let newNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


