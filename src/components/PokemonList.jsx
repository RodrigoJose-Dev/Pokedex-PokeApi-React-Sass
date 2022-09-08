import PokemonItem from "./PokemonItem";
import Pagination from "./Pagination";

import "../styles/components/pokemonlist.sass";

const PokemonList = ({
    pokemons,
    loading,
    currentPage,
    totalPages,
    setPage,
    onPreviousPage,
    onNextPage,
}) => {
    //voltar para a página anterior
    const onPreviousPageHandler = () => {
        if (currentPage > 0) {
            setPage(currentPage - 1);
        }
    };
    const onNextPageHandler = () => {
        if (currentPage + 1 !== totalPages) {
            setPage(currentPage + 1);
        }
    };

    return (
        <section>
            <div id="pokedex-header">
                <h1>Lista de Pokémons</h1>
                <Pagination
                    currentPage={currentPage + 1}
                    totalPages={totalPages}
                    onPreviousPage={onPreviousPageHandler}
                    onNextPage={onNextPageHandler}
                />
            </div>
            {loading ? (
                <div id="loading-txt">Carregando...</div>
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
