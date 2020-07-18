import React, { useEffect, useState } from 'react'

export const Pokemon = ({ name, url }) => {
    
    const [pokemon, setpokemon] = useState([])

    const getPokemon = async() => {
        const urlPokemon = url ;
        const response = await fetch( urlPokemon );
        const { sprites:front_default } = await response.json();
        console.log(front_default)
        setpokemon(front_default)
    }

    useEffect(() => {
        getPokemon()
    }, [])
    
    return (
        <div className="card">
            <img src={pokemon.front_default} alt={name} />
            <p>{ name }</p>  
        </div>
    )
}
