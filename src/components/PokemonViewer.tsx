import React, { useState } from 'react';
import { getRandomPokemonNumber } from '../utils/getRandomPokemonNumber';
import PictureSwap from './PictureSwap';

const PokemonViewer = () => {
    const startingPokemonNumber = getRandomPokemonNumber();
    const [pokemonUrls, setPokemonUrls] = useState<[string, string]>([
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${startingPokemonNumber}.png`,
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${startingPokemonNumber}.png`
      ]);
      const hanldeChangePokemon = () => {
        const newPokemonUrl = getRandomPokemonNumber();
        setPokemonUrls([
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${newPokemonUrl}.png`,
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${newPokemonUrl}.png`
        ])
      }
    
    return (
        <>
            <PictureSwap pictureUrls={pokemonUrls} />
            <button onClick={ () => hanldeChangePokemon() }>Change Pokemon</button>
        </>
    );
};

export default PokemonViewer;