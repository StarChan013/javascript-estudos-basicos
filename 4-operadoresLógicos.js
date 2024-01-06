//Simular venda de destino e remover ele da lista APENAS SE O CLIENTE for maior de 18 anos

console.log("Possíveis destinos:");
const destinosViagem = new Array("São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia", "Paraná");

console.log(destinosViagem);
const idadeCliente1 = 20;
const idadeCliente2 = 15;

if (idadeCliente1 >= 18) { //se a condição entre parenteses for verdadeira, executa a operação entre chaves
    console.log("Comprador maior de idade");
    destinosViagem.splice(2, 1);
    console.log(destinosViagem);
} else { //Se não, executa essa
    console.log("Comprador menor de idade. Compra não é possível")
}

//OPERADORES LÓGICOS 

let aNumber = 60;

console.log(aNumber > 20); //maior que
console.log(aNumber < 20); //menor que
console.log(aNumber >= 20); //maior ou igual
console.log(aNumber <= 20); //menor ou igual
console.log(aNumber == 20); //igual

//true = verdadeiro
//false = falso

//IFS ENCADEADOS

let estaAcompanhada = true;

if (idadeCliente2 >= 18) {
    console.log("Comprador maior de idade");
    destinosViagem.splice(2, 1);
    console.log(destinosViagem);
} else {
    if (estaAcompanhada) {
        console.log("Comprador está acompanhado");
        destinosViagem.splice(2, 1);
        console.log(destinosViagem);
    } else {
        console.log("Comprador menor de idade. Compra não é possível")
    }
}

//encadeamento de condições 

// || = ou / && = e 
//Exemplo

let nome = "Vanessa"
let idade = 26;

if (nome == "Vanessa" && idade == 26) {
    console.log("Olá, Vanessa")
} else {
    if (idade == 26 || nome == "Vanessa") {
        console.log("Olá, estranho com a minha idade ou mesmo nome")
    }
}

