import React from 'react'
import { Link } from 'react-router-dom';


const CharactersByHero = ({alter_ego, characters}) => {
    // if(alter_ego === characters) return (<></>);
    // return <p>{characters}</p>
    return ( alter_ego === characters ) ? (<></>) : <small>{characters}</small>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    className = "",
}) => {
    
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    // const charactersToDisplay = (characters !== alter_ego) ? `${characters} y ${alter_ego}` : characters;

    return (
        <div className={`col ${className}`}>
            <div className="card shadow" style={{borderColor:'#cfd7e5'}}>
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} className="card-img" loading="lazy" alt={superhero} style={{ borderRadius:'5px 0px 0px 5px'}} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {/* {
                                (alter_ego !== characters) && <small className="card-text">{characters}</small>
                            } */}
                            {/* <CharactersByHero alter_ego={alter_ego} characters={characters} /> */}
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>
                            {/* <button className="btn btn-outline-primary">
                                Más...
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
