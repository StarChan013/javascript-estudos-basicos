//Um objeto é tem um par chave-valor onde chave: 'valor', e os valores são acessados por nomes

const objetoPessoa = {
  nome: "José",
  idade: 32,
  cpf: "111.222.333-04",
  email: "jose@dominio.com",
  profissão: "engenheiro"
};

//acessando valores

console.log(objetoPessoa); //acessa todo o objeto

console.log(objetoPessoa.nome); //acessa um valor especifico ou

console.log(objetoPessoa['nome']); //outra forma de acessar valor sem saber o nome das chaves

console.log(objetoPessoa.cpf.substring(0, 3)); //manipula a string da chave cpf, mostrando apenas os 3 primeiros digitos

//manipulando objetos 

objetoPessoa.telefone = '11 222223333'; //adiciona propriedades e valores

objetoPessoa.nome = 'José Silva'; //edita o valor de uma chave existente

delete objetoPessoa.cpf //deleta uma chave e valor

console.log(objetoPessoa);




