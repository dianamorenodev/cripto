import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

function Cripto(props) {
  let token = props.token

  const [criptoList, setCriptoList] = useState([])

  useEffect(() => {
    const endPoint = 'https://api.coinlore.net/api/tickers/'
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data
        setCriptoList(apiData.results)
      })
      .catch(error => {
        alert("Hubo errores, intenta más tarde")
      })
  }, [setCriptoList]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <center><h1>Ranking de cripto monedas</h1></center>
        {!token && <Navigate to='/' />}
        {
          criptoList.map((cripto) => {
            return (
              <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 my-4' key={cripto.id}>
                <div className="card " >
                  <img className="card-img-top" src={cripto.symbol} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">{cripto.name}</h5>
                    <p className="card-text">{cripto.rank}</p>
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