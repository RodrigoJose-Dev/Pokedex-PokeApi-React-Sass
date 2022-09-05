//import { PokemonItem } from "./PokemonItem";

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
                //lista de pokemons
                <div id="pokemon-grid">
                    {pokemons.map((pokemon, index) => {
                        return (
                            <div>
                                <div>nome: {pokemon.id}</div>
                                <img
                                    src={pokemon.sprites.url}
                                    alt={pokemon.name}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default PokemonList;
