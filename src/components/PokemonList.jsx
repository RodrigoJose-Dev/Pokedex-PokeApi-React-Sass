import PokemonItem from "./PokemonItem";
import Pagination from "./Pagination";

import "../styles/components/pokemonlist.sass";

const PokemonList = ({
    pokemons,
    loading,
    currentPage,
    totalPages,
    onPreviousPage,
    onNextPage,
}) => {
    //voltar para a página anterior
    const onPreviousPageHandler = () => {
        console.log("voltou para a página anterior");
    };
    const onNextPageHandler = () => {
        console.log("foi para a próxima página");
    };

    return (
        <section>
            <div id="pokedex-header">
                <h1>Pokemon List</h1>
                <Pagination
                    currentPage={currentPage + 1}
                    totalPages={totalPages}
                    onPreviousPage={onPreviousPageHandler}
                    onNextPage={onNextPageHandler}
                />
            </div>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div id="pokedex-grid">
                    {pokemons &&
                        pokemons.map((pokemon, index) => {
                            return (
                                <PokemonItem key={index} pokemon={pokemon} />
                            );
                        })}
                </div>
            )}
        </section>
    );
};

export default PokemonList;
