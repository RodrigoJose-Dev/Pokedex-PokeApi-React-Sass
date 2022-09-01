import { searchPokemon } from "./scripts/api";

import Navbar from "./components/Header";
import Searchbar from "./components/Searchbar";

function App() {
    //passando o metodo de buscar pokemon da api
    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon);
        console.log("pokemon: ", result);
    };

    return (
        <div className="App">
            <Navbar />
            <Searchbar onSearch={onSearchHandler} />
        </div>
    );
}

export default App;
