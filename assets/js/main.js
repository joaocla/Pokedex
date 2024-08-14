
function createPokemonLi(pokemon){
    return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="details">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png" alt="${pokemon.name}">
                </div>
            </li>`
};

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(createPokemonLi).join('')
});
