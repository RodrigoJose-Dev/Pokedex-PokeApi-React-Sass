import FavoriteContext from "../contexts/FavoriteContext";
import { useContext } from "react";

import "../styles/variables.sass";
import "../styles/components/navbar.sass";

const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext);
    return (
        <nav>
            <div id="nav-container">
                <h1>Pokedex</h1>
                <div id="heart">{favoritePokemons.length}❤</div>
            </div>
        </nav>
    );
};

export default Navbar;
