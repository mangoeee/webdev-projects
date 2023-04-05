// const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';
const searchBar = document.querySelector('input[type="search"]');

// Change sprite on input using pokemondb, not pokeAPI
//
searchBar.addEventListener('search', async () => {
    input = searchBar.value;
    spriteURL = `https://img.pokemondb.net/sprites/scarlet-violet/normal/${input.toLowerCase()}.png`;
    
    try {
        document.getElementById("sprite").src = spriteURL;
    } catch(error) {
        console.error(error)
        document.getElementById('name').innerHTML = `Pokémon`;
    }
    document.getElementById('name').innerHTML = `${input.charAt(0).toUpperCase() + input.slice(1)}`;
});


// If Pokémon entry doesn't exist, show missingno
//
// document.addEventListener("DOMContentLoaded", function(event) {
//     document.querySelectorAll('img').forEach( function (img) {
//        img.onerror = function() {this.style.display='none';};
//     })
//  });