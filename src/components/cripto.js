import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

function Cripto(props) {
  let token = props.token

  const [criptoList, setCriptoList] = useState([])

  useEffect(() => {
    const endPoint = 'https://api.coinlore.net/api/tickers/'
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data.data
        console.log(res)
        setCriptoList(apiData)
      })
      .catch(error => {
        alert("Hubo errores, intenta más tarde")
      })
  }, [setCriptoList]);

  return (
    <Container fluid>
      <Row className="justify-content-center mx-auto">
        <center><h1>Ranking de cripto monedas</h1></center>
        {!token && <Navigate to='/' />}
        {
          criptoList.map((cripto) => {
            return (
              <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 my-4 d-flex flex-col justify-content-center' key={cripto.id}>
                <div className="card " >
                  <div className="card-body">
                    <h5 className="card-title">{cripto.name}</h5>
                    <p className="card-text">Rank: {cripto.rank}</p>
                    <p className='card-text'>Usd: {cripto.price_usd}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default Cripto