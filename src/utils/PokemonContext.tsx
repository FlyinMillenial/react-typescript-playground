import { createContext, useState } from "react"

interface IPokemonContext {
    children: JSX.Element[]
}

const defaultName = 'Bulbasaur';

export const PokemonContext = createContext(defaultName);
export const SetPokemonContext = createContext<Function>(() => {});

export const PokemonContextProvider = ({children}:IPokemonContext) => {

    const [pokemonName, setPokemonName] = useState(defaultName);
    
    return (
        <PokemonContext.Provider value={pokemonName}>
            <SetPokemonContext.Provider value={setPokemonName}>
                {children}
            </SetPokemonContext.Provider>
        </PokemonContext.Provider>
    )
}