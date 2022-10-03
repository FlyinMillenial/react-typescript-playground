import { createContext, useState } from "react"

interface IPokemonContext {
    children: JSX.Element[]
}

const defaultName = 'Bulbasaur';

export const PokemonContext = createContext(defaultName);
export const SetPokemonContext = createContext(() => {});

export const PokemonContextProvider = ({children}:IPokemonContext) => {
    const [pokemonName, setPokemonName] = useState(defaultName);
    return (
        <PokemonContext.Provider value={pokemonName}>
            {children}
        </PokemonContext.Provider>
    )
}