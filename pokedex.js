const pokedex ='pokedex.json';
const pokemons = [];

fetch(pokedex)
  .then(blob => blob.json())
  .then(data => pokemons.push(...data.pokemon));

function findPokemon(searchPokemon, pokemons){
  return pokemons.filter(pokemon => {
    const regex = new RegExp(searchPokemon, 'gi');
    return pokemon.name.match(regex);
  });
}

function showResult() {
  const arrayResults = findPokemon(this.value, pokemons);
  const html = arrayResults.map(pokemon => {
    return `
    <li>
    <img src='${pokemon.img}' width='42' height='42'>
    <span>${pokemon.name}</span>
    <span>${pokemon.weight}</span>
    <span>${pokemon.height}</span>
    </li>
    `;
  }).join('');
  result.innerHTML = html ;
}

const input = document.querySelector('input');
const result = document.querySelector('ul');

input.addEventListener('change', showResult);
input.addEventListener('keyup', showResult);
