import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchPage = () => {

  const navigate = useNavigate();

  // Para obtener el query params, se debe usar el useLocation y el useSearchParams
  const location = useLocation();
  // console.log({location});
  const query = new URLSearchParams(location.search);
  const {q = ''} = Object.fromEntries(query.entries());
  // console.log({params});

  // const {  onInputChange, formState: { searchText } } = useForm({
  const {  onInputChange, searchText } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    console.log({searchText});
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }

  return (
    <>
      <h1>Búsqueda</h1>
      <hr />

      <div className="row">

        <div className="col-4">
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

        <div className="col-8">
          <h3>Results</h3>
          <hr />

          <div className="alert alert-primary">
            Buscando un heroe
          </div>

          <div className="alert alert-danger">
            Sin resultados con el termino: <strong>{q}</strong>
          </div>

          {/* <HeroCard /> */}

        </div>

      </div>

    </>
  )
}
