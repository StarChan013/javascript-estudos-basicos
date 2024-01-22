const clientes = require ("./clientes.json");

//Encontrar

function encontra(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontra(clientes, "nome", "Kirby");

console.log(encontrado);

//Filtrar

function filtrarApartSemComplemento (clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtro = filtrarApartSemComplemento(clientes);

console.log(filtro);

//Ordenar

function ordenar(lista, propriedade){
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]){
            return -1;
        }
        if (a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0;
    })

    return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");

console.log(ordenadoNome);

const ordemReversa = ordenadoNome.reverse();

console.log(ordemReversa);