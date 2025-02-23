import React from 'react'

export const SearchPage = () => {
  return (
    <>
      <h1>Búsqueda</h1>
      <hr />

      <div className="row">

        <div className="col-4">
          <form>
            <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar heroe..." aria-label="Buscar heroe..." aria-describedby="button-addon2"
                autoComplete='off'
              />
              <button className="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
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
            Sin resultados
          </div>

          {/* <HeroCard /> */}

        </div>

      </div>

    </>
  )
}
