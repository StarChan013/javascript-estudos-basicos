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

//Tipos

const cliente = {
  nome: 'João',
  idade: 24,
  email: 'joão@firma.com',
  telefone: ['11222223333','11444445555'],
}

//é possível adicionar uma lista dentro de um objeto

console.log(cliente.telefone[1]);

//é possível adicionar objetos em objetos, chamados de aninhados

cliente.enderecos = [{
  rua: 'Rua Fulano de Tal',
  numero: 2,
  apartamento: true,
  complemento: 'apartamento 450',
}];

console.log(cliente.enderecos.rua); //encontra o valor de uma chave dentro de um objeto q está em outro objeto

//lista de objetos

cliente.enderecos.push({
  rua: 'Rua Ciclano de Tal',
  numero: 17,
  apartamento: false,
  complemento: '',
})

//console.log(cliente.enderecos);

const listaApenasApartamentos = cliente.enderecos.filter( //filtrando para exibir apenas apartamentos
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);

const novoCliente = {
  nome: 'Maria',
  idade: 29,
  email: 'maria@firma.com',
  telefone: ['11232334545', '11454556767'],
  saldo: 200.00,
  efetuaPagamento: function (valor) { //é possíve adicionar funções dentro de objetos
    if (valor > this.saldo){
      console.log('Saldo Insuficiente')
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo salvo: ${this.saldo}`);
    }
  }
}

novoCliente.efetuaPagamento(25);


