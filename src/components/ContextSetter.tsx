import React, { useContext, useState } from 'react';
import { SetPokemonContext } from '../utils/PokemonContext';

const ContextSetter = () => {

    let [inputValue, setInputValue] = useState('');
    let setPokemonName = useContext(SetPokemonContext)

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        setPokemonName(inputValue);
    }

    return (
        <>
            <input value={inputValue} onChange={(e) => handleInput(e)} type='text'></input>
            <button onClick={() => handleClick()}>Update Context</button>
        </>
    );
};

export default ContextSetter;