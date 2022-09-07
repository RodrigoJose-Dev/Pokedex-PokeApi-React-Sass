import "../styles/components/pokemonitem.sass";

const PokemonItem = ({ pokemon }) => {
    const onHeartClick = () => {
        console.log("favoritou");
    };
    const heart = "❤";
    return (
        <div className="card">
            <div className="img-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon-type-txt">
                                    {type.type.name}
                                </div>
                            );
                        })}
                    </div>
                    <button
                        className="pokemon-heart-btn"
                        onClick={onHeartClick}
                    >
                        {heart}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PokemonItem;
