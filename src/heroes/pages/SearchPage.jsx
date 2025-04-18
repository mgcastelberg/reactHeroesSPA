import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {

  const navigate = useNavigate();

  // Para obtener el query params, se debe usar el useLocation y el useSearchParams
  const location = useLocation();
  // console.log({location});
  const query = new URLSearchParams(location.search);
  const {q = ''} = Object.fromEntries(query.entries());
  // console.log({q});

  const heroes = getHeroesByName(q);
  // console.log(heroes);
  
  // const {  onInputChange, formState: { searchText } } = useForm({
  const {  onInputChange, searchText } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    // console.log({searchText});
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }

  return (
    <>
      <h1>Búsqueda</h1>
      <hr />

      <div className="row">

        <div className="col-sm-12 col-lg-5">
          <form onSubmit={onSearchSubmit}>
            <div className="input-group mb-3">
              <input 
                type="text"
                name="searchText"
                className="form-control" 
                placeholder="Buscar heroe..." aria-label="Buscar heroe..." aria-describedby="button-addon2"
                autoComplete='off'
                value={searchText}
                onChange={onInputChange}
              />
              <button className="btn btn-outline-primary" type="submit" id="button-addon2">Buscar</button>
            </div>
          </form>
        </div>

        <div className="col-sm-12 col-lg-7">
          <h3>Results</h3>
          <hr />

          {/* forma 1 */}
          {/* {
            (q === '') && <div className="alert alert-primary">Buscar un heroe</div>
          } */}

          {/* forma 2 */}
          {/* {
            (q === '') 
            ? <div className="alert alert-primary">Buscar un heroe</div>
            : (heroes.length === 0) && <div className="alert alert-danger">Sin resultados con el termino: <strong>{q}</strong></div>
          } */}

          {/* forma 3 */}
          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: (q === '') ? 'block' : 'none'  }}>
            Buscando un heroe
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: (q !== '' && heroes.length === 0) ? 'block' : 'none'  }}>
            Sin resultados con el termino: <strong>{q}</strong>
          </div>

          {
            heroes.map( heroe => (
              <HeroCard key={ heroe.id } {...heroe} className="animate__animated animate__fadeIn mb-2" />
            ))
          }

        </div>

      </div>

    </>
  )
}
