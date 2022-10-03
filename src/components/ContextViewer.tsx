import { useContext } from "react";
import { PokemonContext } from "../utils/PokemonContext";

const ContextViewer = () => {

    const pokemonName = useContext(PokemonContext);

    return (
        <>
            Show context here: {pokemonName}.
        </>
    );
};

export default ContextViewer;