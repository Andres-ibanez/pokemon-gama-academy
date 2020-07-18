import React from 'react'

export const Pokedex = () => {

    const endPoint = 'https://pokeapi.co/api/v2/pokemon?limit=964&offset=1';
    fetch(endPoint)
        .then( response => response.json())
        .then( data => console.log( {results} ))

    return (
        <Container />
    )
}
