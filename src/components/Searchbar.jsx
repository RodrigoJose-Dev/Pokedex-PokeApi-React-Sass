import { useState } from "react";

import "../styles/components/searchbar.sass";

const Searchbar = (props) => {
    const { onSearch } = props;

    const [search, setSearch] = useState("charizard");

    //recebe o input do usuário na barra de busca
    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    };

    //guarda o que o usuário digitou
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
