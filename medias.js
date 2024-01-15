// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

// const media = (nota1 + nota2 + nota3 + nota4)/4;

// console.log(media);

//OU

const notas = [10, 6.5, 8, 7.5];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

//ADICIONANDO ELEMENTOS

const notas2 = [10, 6, 8];

notas2.push(7);

const media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3]) / notas2.length;

console.log(media2);

//REMOVENDO ELEMENTOS

const notas3 = [10, 6, 8, 5.5, 10];

notas3.pop();

console.log(notas3);

const media3 = (notas3[0] + notas3[1] + notas3[2] + notas3[3]) / notas3.length;

console.log(`A média é ${media3}`);

//REDUCE();

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0); //possui um acumulador interno

    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaPython));
console.log(calculaMedia(salaJava));
