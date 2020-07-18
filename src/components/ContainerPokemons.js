import React, { useEffect, useState } from 'react'
import { Pokemon } from './Pokemon'

export const ContainerPokemons = () => {

    const [pokemons, setpokemons] = useState([])

    const getPokemons = async() => {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=40';
        const response = await fetch( url );
        const { results } = await response.json();
    
        setpokemons(results)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <div className="container">
            {
                pokemons.map( pokemon =>  
                    <Pokemon 
                        { ...pokemon } //envio de propiedades mediante desestructuracion
                        key={ pokemon.name } 
                    />)
            }
        </div>
    )
}
