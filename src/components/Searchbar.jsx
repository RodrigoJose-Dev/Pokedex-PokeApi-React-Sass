import { useState } from "react";

import "../styles/components/searchbar.sass";

const Searchbar = () => {
    const [search, setSearch] = useState("charizard");

    //recebe o input do usuário na barra de busca
    const onChangeHandler = (e) => {
        console.log("pokemon: ", e.target.value);
        setSearch(e.target.value);
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
            <div id="search-btn"></div>
        </div>
    );
};

export default Searchbar;
