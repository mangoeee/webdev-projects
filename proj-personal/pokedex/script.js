let searchBar = document.querySelector('input[type="search"]');

// Change sprite on input using pokemondb, not pokeAPI
//
searchBar.addEventListener('search', async (input) => {
    input = searchBar.value;
    
    // Display sprite from pokemondb
    //
    let spriteURL = `https://img.pokemondb.net/sprites/scarlet-violet/normal/${input.toLowerCase()}.png`;
    document.getElementById("sprite").src = spriteURL;
    // Fetch data from PokeAPI
    //
    const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`;
    const response = await fetch(pokeAPI);
    // Catch and display error
    //
    if(response.status == 404 || response.statusText == 'Not Found'){
        document.getElementById('error').classList.add('show')
        document.getElementById('error').classList.remove('hidden')
        return
    } else {
        document.getElementById('error').classList.remove('show')
        document.getElementById('error').classList.add('hidden')
    }
    // Update page with pokemon data
    let pokemon = await response.json()
    // debugger
    document.getElementById('update_name').innerHTML = pokemon.name.charAt(0).toUpperCase() + input.slice(1);
    document.getElementById('update_type').innerHTML = `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`;
    document.getElementById('update_height').innerHTML = `${pokemon.height / 10}m / ${(pokemon.height * 3.937.toFixed(2))}"`;
    document.getElementById('update_weight').innerHTML = `${pokemon.weight / 10}kg / ${(pokemon.weight / 4.536).toFixed(2)}lbs`;
    console.log(pokemon.types[0]);
    
});

