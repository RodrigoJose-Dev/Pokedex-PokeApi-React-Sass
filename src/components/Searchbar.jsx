import { useState } from "react";
import { searchPokemon } from "../scripts/api";

import "../styles/components/searchbar.sass";

const Searchbar = ({ onSearch }) => {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();

    //recebe o input do usuário na barra de busca
    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    };

    //passando o metodo de buscar pokemon da api
    //e armazenando o pokemon encontrado
    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon);
        setPokemon(result);
    };

    //pega o que o usuário digitou e passa para a busca
    const onButtonClickHandler = () => {
        onSearchHandler(search);
    };

    return (
        <div id="search-container">
            <div id="input">
                <input
                    type="text"
                    placeholder="Buscar pokémon"
                    onChange={onChangeHandler}
                />
            </div>
            <div id="search-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
            {pokemon && (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                </div>
            )}
        </div>
    );
};

export default Searchbar;
