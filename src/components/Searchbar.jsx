import { useState } from "react";
import { searchPokemon } from "../scripts/api";

import "../styles/components/searchbar.sass";

const Searchbar = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    //recebe o input do usuário na barra de busca
    const onChangeHandler = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(undefined);
        }
    };

    const onButtonClickHandler = () => {
        onSearch(search);
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
        </div>
    );
};

export default Searchbar;
