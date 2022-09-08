import { useEffect, useState } from "react";

import { getPokemonData, getPokemons } from "./scripts/api";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import PokemonList from "./components/PokemonList";

function App() {
    //state de loading da tela
    const [loading, setLoading] = useState(false);

    //state da lista de pokemons
    const [pokemons, setPokemons] = useState([]);

    //state das pagina atual
    const [page, setPage] = useState(0);
    //state do total de páginas
    const [totalPages, setTotalPages] = useState(0);

    const itensPerPage = 50;
    //chama todos os pokemons, a partir de cada pokemon, chama o proprio get
    //deles para pegar as informações de cada um
    //é passado itensPerPage para denominar o limit e itensPerPage * page para
    //determinar o offset
    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons(itensPerPage, itensPerPage * page);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url);
            });

            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
            //realizando divisão para saber o número de pokemons
            setTotalPages(Math.ceil(data.count / itensPerPage));
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
            <PokemonList
                pokemons={pokemons}
                loading={loading}
                currentPage={page}
                totalPages={totalPages}
            />
        </div>
    );
}

export default App;
