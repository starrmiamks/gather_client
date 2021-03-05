import React, {useState, useEffect} from 'react';

import {

  Container, CardImg, CardBody,
  CardTitle, Button, Col, Row, CardSubtitle
} from 'reactstrap';

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
<<<<<<< HEAD
      }
=======
      })
>>>>>>> 760a3dd088c2ef488569e441ccc1fb5ceb27f20b
    }).then(()=>{
      let tmp = favorites.filter(favorite => favorite.id !== id)
      setFavorites(tmp)
    })
  }

  const createNote = (note, id) => {
    console.log(id)
    fetch(`http://localhost:3000/favorites/update/${id}`, {
      method: 'PUT',
<<<<<<< HEAD
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      },
=======
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      }),
>>>>>>> 760a3dd088c2ef488569e441ccc1fb5ceb27f20b
      body: JSON.stringify({
        favorites: {
            note: note
        }
      }) 
    })
      .then(res => console.log(res))
<<<<<<< HEAD
=======
      
>>>>>>> 760a3dd088c2ef488569e441ccc1fb5ceb27f20b
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
                    <Button onClick={() => deleteFav(favorite.id)}>Delete</Button>
<<<<<<< HEAD
                    <CardSubtitle>Note:<input class="rounded" onChange={e => setNote(e.target.value)}/></CardSubtitle>
                    <Button onClick={ e => createNote(note, favorite.id)}>Add Note</Button>
=======
                    <CardSubtitle>Note: {favorite.note}</CardSubtitle>
                    <br></br>
                    <CardSubtitle><input class="rounded" onChange={e => setNote(e.target.value)} placeholder="enter text for note"/></CardSubtitle>
                    <Button onClick={ e => createNote(note, favorite.id)}>Add/Update Note</Button>
>>>>>>> 760a3dd088c2ef488569e441ccc1fb5ceb27f20b
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
