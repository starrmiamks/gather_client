
import React, {useState, useEffect} from 'react';

import {
    Container, CardImg, CardBody,
    CardTitle, Col, Row
} from 'reactstrap';

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/favorites/mine', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      }
    })
      .then(res => (res.json()))
      .then(json => {
        setFavorites(json)
      })
  }, [])

  const deleteFav = (e, id) => {
    e.preventDefault()
    fetch(`http://localhost:3000/favorites/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      }
    }).then(()=>{
      let tmp = favorites.filter(favorite => favorite.id !== id)
      setFavorites(tmp)
    })
  }

  return (
    <div className="card">
      <Container>
        <Row>
          {favorites.map(favorite => {
            return (
              <Col key={favorite.id} lg="4" sm="6" xs="12" className="grid-column">
                <div className="resultsCard"
                >
                  <CardImg top width="25%" src={favorite.imageURL} alt="Recipe Image" />
                  <CardBody >
                    <CardTitle tag="h5">{favorite.title}</CardTitle>
                    <Button onClick={e => deleteFav(e, favorite.id)}>Delete</Button>
                  </CardBody>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Favorites;
