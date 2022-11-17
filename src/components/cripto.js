import { Navigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import swAlert from 'sweetalert';


function Cripto(props) {
  let token = props.token

  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    const endPoint = 'https://api.coinlore.net/api/tickers/'
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data
        setMoviesList(apiData.results)
      })
      .catch(error => {
        swAlert(
          <h2>Hubo errores, intenta más tarde</h2>
        )
      })
  }, [setMoviesList]);

  return (
    <div className='container mt-4'>
      {!token && <Navigate to='/' />}
      <center><h1>Peliculas Recientes</h1></center>
      <div className='row'>

        {
          moviesList.map((movies) => {
            return (
              <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 my-4' key={movies.id}>
                <div className="card " >
                  <img className="card-img-top" src={'https://image.tmdb.org/t/p/w500' + movies.poster_path} alt="Card cap" />
                  <button onClick={props.addOrRemoveFromFavs} data-movie-id={movies.id} className='favourite-btn'>🖤</button>
                  <div className="card-body">
                    <h5 className="card-title">{movies.title.substring(0, 30)
                    }...</h5>
                    <p className="card-text">{movies.overview.substring(0, 100)}...</p>
                    <Link to={`/detalle?movieID=${movies.id}`} className="btn btn-primary">Ver detalle</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cripto