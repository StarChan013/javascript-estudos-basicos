//Vamos simular uma jornada pelo mundo Pokémon até virarmos mestres Pokémon

const seuTime = [];

const iniciais = ['Bulbasaur', 'Charmander', 'Squirtle'];

seuTime.push(iniciais[0]);

console.log('Você iniciou sua jornada escolhendo um inicial');
console.log(`Seu time atual é ${seuTime}`);

console.log('No meio da sua jornada em direção ao primeiro ginásio, você encontra alguns Pokémon pelo caminho e decide capturar alguns');

const pokemonRotainicial = ['Caterpie', 'Weedle', 'Pidgey', 'Rattata'];

seuTime.push(pokemonRotainicial[2] , pokemonRotainicial[0]);

console.log(`Seu time atual é ${seuTime}`);

console.log('Caterpie é um Pokémon que evolui rápido, e após um pouco de treino, ele evolui');

seuTime[2] = 'Metapod';

console.log(`Seu time para enfrentar o ginásio de pedra está pronto. Este é ele atualmente: ${seuTime}`);

console.log('Após uma batalha díficil na cidade de Pewter, você ganha!');

const badges = [];

badges.push('Boulder Badge');

seuTime[2] = 'Butterfree';

console.log(`Suas insignias atuais são: ${badges} e seu time atual é: ${seuTime}`);

console.log('Durante seu caminho para o segundo ginásio, você vai até a Mt. Moon e captura um novo Pokémon e decide deixar sua Butterfree na box');

const pokemonBox = []
function sendToBox(pokemon){
    pokemonBox.push(pokemon);
    let index = seuTime.indexOf(pokemon);
    seuTime.splice(index,1);
}

sendToBox('Butterfree');

seuTime.push('Geodude');

console.log(`Seu time atual é ${seuTime} e sua Box tem: ${pokemonBox}`);

console.log('Na cidade de Cerulean, você encontra seu rival. Nessa batalha, dois de seus Pokémon acabam evoluindo');

function evolution(pokemon, evolucao){
    let index = seuTime.indexOf(pokemon);
    seuTime.splice(index, 0);
    seuTime[index] = evolucao
}

evolution('Bulbasaur','Ivysaur');
evolution('Pidgey', 'Pidgeotto');

console.log(`Seu time: ${seuTime}`);

console.log('Após uma batalha com seu rival, você batalha contra a doce Misty. Ao vencer, você ganha dois itens: A sua insignia e uma Water Stone');

const itemBag = [];

itemBag.push('Water Stone');
badges.push('Cascade Badge');

console.log('Você salva o jogo. Veja seus status');
console.log(`Seu time: ${seuTime} \nSuas badges: ${badges} \nSeus items: ${itemBag}`);