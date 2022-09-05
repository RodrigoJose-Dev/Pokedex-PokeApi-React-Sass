import { useEffect, useState } from "react";

import { getPokemons } from "./scripts/api";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import PokemonList from "./components/PokemonList";

function App() {
    //colocar um loading na tela
    const [loading, setLoading] = useState(false);

    //lista dos pokemons
    const [pokemons, setPokemons] = useState([]);

    //solicitar pokemons
    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const result = await getPokemons();
            setPokemons(result);
            setLoading(false);
        } catch (error) {
            console.log("fetchPokemons erro: ", error);
        }
    };

    //toda vez que carregar a página, fará uma busca para
    //encontrar os pokemons
    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <div className="App">
            <Header />
            <Searchbar />
            <PokemonList pokemons={pokemons.results} loading={loading} />
        </div>
    );
}

export default App;
