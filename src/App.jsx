import { useEffect, useState } from "react";

import { getPokemonData, getPokemons } from "./scripts/api";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import PokemonList from "./components/PokemonList";
import { FavoriteProvider } from "./contexts/FavoriteContext";

function App() {
    //state de loading da tela
    const [loading, setLoading] = useState(false);

    //state da lista de pokemons
    const [pokemons, setPokemons] = useState([]);

    //state das pagina atual
    const [page, setPage] = useState(0);
    //state do total de páginas
    const [totalPages, setTotalPages] = useState(0);

    //state lista de pokemons favoritos
    const [favorites, setFavorites] = useState([]);

    const itensPerPage = 30;
    const favoritesKey = "f";

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

    //pegando as informações de favoritos
    const loadFavoritePokemons = () => {
        const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey));
        setFavorites(pokemons);
    };

    //toda vez que carregar a página, irá carregar as informações armazenadas
    //no localstorage (pokemons favoritos)
    useEffect(() => {
        loadFavoritePokemons();
    }, []);

    //toda vez que carregar a página, fará uma busca para
    //encontrar os pokemons e atualizará o número da página
    //toda vez que a página for mudada
    useEffect(() => {
        fetchPokemons();
    }, [page]);

    const updateFavoritePokemons = (name) => {
        const updateFavorites = [...favorites];
        const favoriteIndex = favorites.indexOf(name);

        //se já houver o pokémon nos favoritos, ele é removido
        //se não, ele é adicionado na lista
        if (favoriteIndex >= 0) {
            updateFavorites.splice(favoriteIndex, 1);
        } else {
            updateFavorites.push(name);
        }
        window.localStorage.setItem(
            favoritesKey,
            JSON.stringify(updateFavorites)
        );
        setFavorites(updateFavorites);
    };

    return (
        <FavoriteProvider
            value={{
                favoritePokemons: favorites,
                updateFavoritePokemons: updateFavoritePokemons,
            }}
        >
            <div className="App">
                <Navbar />
                <Searchbar />
                <PokemonList
                    pokemons={pokemons}
                    loading={loading}
                    currentPage={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
            </div>
        </FavoriteProvider>
    );
}

export default App;
