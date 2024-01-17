//Vamos simular uma jornada pelo mundo Pokémon até virarmos mestres Pokémon

const seuTime = [];

const iniciais = ["Bulbasaur", "Charmander", "Squirtle"];

seuTime.push(iniciais[0]);

console.log("Você iniciou sua jornada escolhendo um inicial");
console.log(`Seu time atual é ${seuTime}`);

console.log(
  "No meio da sua jornada em direção ao primeiro ginásio, você encontra alguns Pokémon pelo caminho e decide capturar alguns"
);

const pokemonRotainicial = ["Caterpie", "Weedle", "Pidgey", "Rattata"];

seuTime.push(pokemonRotainicial[2], pokemonRotainicial[0]);

console.log(`Seu time atual é ${seuTime}`);

console.log(
  "Caterpie é um Pokémon que evolui rápido, e após um pouco de treino, ele evolui"
);

seuTime[2] = "Metapod";

console.log(
  `Seu time para enfrentar o ginásio de pedra está pronto. Este é ele atualmente: ${seuTime}`
);

console.log("Após uma batalha díficil na cidade de Pewter, você ganha!");

const badges = [];

badges.push("Boulder Badge");

seuTime[2] = "Butterfree";

console.log(
  `Suas insignias atuais são: ${badges} e seu time atual é: ${seuTime}`
);

console.log(
  "Durante seu caminho para o segundo ginásio, você vai até a Mt. Moon e captura um novo Pokémon e decide deixar sua Butterfree na box"
);

const pokemonBox = [];
function sendToBox(pokemon) {
  pokemonBox.push(pokemon);
  let index = seuTime.indexOf(pokemon);
  seuTime.splice(index, 1);
}

sendToBox("Butterfree");

seuTime.push("Geodude");

console.log(`Seu time atual é ${seuTime} e sua Box tem: ${pokemonBox}`);

console.log(
  "Na cidade de Cerulean, você encontra seu rival. Nessa batalha, dois de seus Pokémon acabam evoluindo"
);

function evolution(pokemon, evolucao) {
  let index = seuTime.indexOf(pokemon);
  seuTime.splice(index, 0);
  seuTime[index] = evolucao;
}

evolution("Bulbasaur", "Ivysaur");
evolution("Pidgey", "Pidgeotto");

console.log(`Seu time: ${seuTime}`);

console.log(
  "Após uma batalha com seu rival, você batalha contra a doce Misty. Ao vencer, você ganha dois itens: A sua insignia e uma Water Stone"
);

const itemBag = [];

itemBag.push("Water Stone");
badges.push("Cascade Badge");

console.log("Você salva o jogo. Veja seus status");
console.log(
  `Seu time: ${seuTime} \nSuas badges: ${badges} \nSeus items: ${itemBag}`
);

console.log(
  "No seu caminho para Vermilion, você encontra um gentil pescador que lhe dá uma vara de pesca(Old Rod).\nVocê resolve testar, mas algo acontece. Você capturou Magikarps demais e agora seu time está lotado!\nVocê só sabia que pode carregar 6 Pokémon por vez?"
);

function party(pokemon) {
  if (seuTime.length > 6) {
    pokemonBox.push(pokemon);
  } else {
    seuTime.push(pokemon);
  }
}

party("Magikarp");
party("Magikarp");
party("Magikarp");
party("Magikarp");
party("Magikarp");

sendToBox("Magikarp");
sendToBox("Magikarp");
sendToBox("Magikarp");
sendToBox("Magikarp");

itemBag.push("Old Rod");

console.log(
  `Problema resolvido, esse é seu time atual ${seuTime} \nSua box: ${pokemonBox} \nSeus items: ${itemBag}`
);

console.log(
  "Em Vermilion, você enfrenta o poderoso Lt. Surge. E após uma batalha eletrizante, você vence"
);

badges.push("Thunder Badge");

console.log(
  `Seu time: ${seuTime} \nSuas badges: ${badges} \nSeus items: ${itemBag}`
);

console.log(
  "No seu caminho para a próxima cidade, você se depara com um obstáculo: \nUm enorme Snorlax dorminhoco! \nPara acordá-lo você precisa usar uma Poké Flute. Temos isso?"
);

function itemExist(item) {
  if (itemBag.includes(item)) {
    console.log(`Você possui ${item}`);
  } else {
    console.log(`Que pena! Você não tem ${item}`);
  }
}

itemExist("Poké Flute");

console.log(
  "De acordo com um pescador, você pode encontrar a Poké Flute em Lavender Town!"
);

console.log(
  "Lavender Town. Que cidade arrepiante, cheia de histórias e fantasmas. \nVocê resolve conhecer a famosa Pokémon Tower depois de boatos que a Poké Flute estaria lá!"
);

console.log(
  "Dentro da Pokémon Tower, você batalha contra seu rival! Seu Geodude acaba evoluindo"
);

evolution("Geodude", "Graveler");

console.log('Continuando sua exploração pela arrepiante Pokémon Tower, você captura um Gastly. Como é possível capturar um fantasma?')
console.log('No último andar, você encontra um senhor que, feliz por alguém encontrá-lo após se perder, lhe dá a Poké Flute');

itemBag.push('Poké Flute');
party('Gastly');

console.log('É o fim da sua jornada em Lavender Town. Aqui está seu status atual:')
console.log(
    `Seu time: ${seuTime} \nSuas badges: ${badges} \nSeus items: ${itemBag}`
  );

console.log('De volta ao Snorlax dorminhoco, temos o item necessário?');

itemExist('Poké Flute');

console.log('Você usa o item e o Snorlax acorda irritado e te ataca! Após batalhar, você consegue capturar o Snorlax!');

party('Snorlax');

console.log('Em Celadon, você enfrenta a doce Erika, especialista em tipo Planta. Ao ganhar ela te entrega a Rainbow Badge e um novo companheiro para sua equipe: Um Eevee');

party('Eevee');
badges.push('Rainbow Badge');

console.log("Você salva o jogo. Veja seus status");
console.log(
  `Seu time: ${seuTime} \nSuas badges: ${badges} \nSeus items: ${itemBag}`
);