import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../helpers';

export const HeroPage = () => {

  const { id } = useParams();

  const hero = getHeroeById( id );

  const navigate = useNavigate();

  console.log(hero);

  if ( !hero ) {
    return <Navigate to="/marvel" />
  }

  const onNavigateBack = () => {
    // history.back();
    navigate(-1);
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/assets/heroes/${ id }.jpg`} 
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
          lazy="loading"
        />
      </div>

      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{ hero.alter_ego }</li>
          <li className="list-group-item"><b>Publisher: </b>{ hero.publisher }</li>
          <li className="list-group-item"><b>First Appearance: </b>{ hero.first_appearance }</li>
        </ul>
        <h3>Characters</h3>
        <p>{ hero.characters }</p>
        <button
          onClick={ onNavigateBack } 
          // onClick={ () => { history.back() } } 
          className="btn btn-outline-primary">
            Regresar
          </button>
      </div>
    </div>
  )
}
