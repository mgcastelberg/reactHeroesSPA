import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';
    

export const HeroList = ( {publisher} ) => {

    // const heroes = getHeroesByPublisher(publisher);
    const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ] );

    return (
        <>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3'>
                {
                    heroes.map( heroe => (
                        <HeroCard key={ heroe.id } {...heroe} />
                        // <li key={ heroe.id }>{ heroe.superhero }</li>
                    ))
                }
            </div>
        </>
    )
}
