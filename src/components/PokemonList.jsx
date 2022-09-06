import PokemonItem from "./PokemonItem";

import "../styles/components/pokemonlist.sass";

const PokemonList = ({ pokemons, loading }) => {
    return (
        <section>
            <div id="pokedex-header">
                <h1>Pokemon List</h1>
                <div>Paginação:</div>
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
