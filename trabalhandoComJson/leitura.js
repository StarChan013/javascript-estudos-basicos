const dados = require ("./cliente.json"); //puxa um arquivo

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados); //transforma objeto em string

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

const objetoCliente = JSON.parse(clienteEmString); //transforma string em objeto

console.log(objetoCliente);