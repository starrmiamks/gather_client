import React, {useState, useEffect} from 'react';

import {

  Container, CardImg, CardBody,
  CardTitle, Button, Col, Row, CardSubtitle
} from 'reactstrap';
import '../components/Favorites.css'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])
  const [note, setNote] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/favorites/mine', {
      method: 'GET',
      headers: new Headers ({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      })
    })
      .then(res => (res.json()))
      .then(json => {
        setFavorites(json)
        console.log(json)
      })
  }, [])

  const deleteFav = (id) => {
    fetch(`http://localhost:3000/favorites/delete/${id}`, {
      method: 'DELETE',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      })
    }).then(()=>{
      let tmp = favorites.filter(favorite => favorite.id !== id)
      setFavorites(tmp)
    })
  }

  const createNote = (note, id) => {
    console.log(id)
    fetch(`http://localhost:3000/favorites/update/${id}`, {
      method: 'PUT',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      }),
      body: JSON.stringify({
        favorites: {
            note: note
        }
      }) 
    })
      .then(res => console.log(res))
      window.location.reload(false)
      
  }

  // function showFav(e) {
  //   const seeFav = e.target.value;
  //   console.log(seeFav);
  //   setNote(note => [note, seeFav]);
  // }

  return (
    <div className="card">
      <Container>
        <h1 className="FavTitle">My Favorites</h1>
        <Row>
          {favorites.map(favorite => {
            return (
              <Col key={favorite.id} lg="4" sm="6" xs="12" className="grid-column">
                <div className="resultsCard"
                >
                  <CardImg top width="25%" src={favorite.imageURL} alt="Recipe Image" />
                  <CardBody >
                    <CardTitle tag="h5">{favorite.title}</CardTitle>
                    <Button onClick={() => deleteFav(favorite.id)}>Delete</Button>
                    <CardSubtitle>Note: {favorite.note}</CardSubtitle>
                    <br></br>
                    <CardSubtitle><input class="rounded" onChange={e => setNote(e.target.value)} placeholder="enter text for note"/></CardSubtitle>
                    <Button onClick={e => createNote(note, favorite.id)}>Add/Update Note</Button>
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
