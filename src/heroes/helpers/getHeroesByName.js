import React from 'react'
import { heroes } from '../data/heroes';

export const getHeroesByName = ( name = '' ) => {

    name = name.toLowerCase().trim();

    if ( name.length === 0 ) return []; // Si la busqueda es vacia, se devuelve un array vacio

    return heroes.filter( 
        heroe => heroe.superhero.toLowerCase().includes( name ) 
    );
}
