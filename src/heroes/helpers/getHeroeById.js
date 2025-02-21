import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroeById = ( id ) => {
    return heroes.find( heroe => heroe.id === id ); // si no encuentra un id, devuelve undefined
}
