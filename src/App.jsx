import { useEffect, useState } from "react";

import { getPokemonData, getPokemons } from "./scripts/api";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import PokemonList from "./components/PokemonList";

function App() {
    //colocar um loading na tela
    const [loading, setLoading] = useState(false);

    //lista dos pokemons
    const [pokemons, setPokemons] = useState([]);

    //chama todos os pokemons, a partir de cada pokemon, chama o proprio get
    //deles para pegar as informações de cada um
    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons();
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url);
            });

            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
        } catch (error) {
            console.log("fetchPokemons erro: ", error);
        }
    };

    //toda vez que carregar a página, fará uma busca para
    //encontrar os pokemons
    useEffect(() => {
        console.log("carregou");
        fetchPokemons();
    }, []);

    return (
        <div className="App">
            <Header />
            <Searchbar />
            <PokemonList pokemons={pokemons} loading={loading} />
        </div>
    );
}

export default App;
