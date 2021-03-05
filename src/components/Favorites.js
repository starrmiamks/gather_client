
import React, {useState, useEffect} from 'react';
import {
    Container, CardImg, CardBody,
    CardTitle, Button, Col, Row
} from 'reactstrap';

const Favorites = () => {
    const [favorites, setFavorites] = useState([])

    useEffect(()=>{
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
            // console.log(json, "this is a console log");
    })

        // setFavorites()
    },[])


    return (
        <div className="card">
           <Container> 
                <Row>
            {favorites.map(favorite => {
                return(
                    <Col key={favorite.id} lg="4" sm="6" xs="12" className="grid-column">
                        <div className="resultsCard" 
                        // style={{width: "25%", height: "60%"}}
                        >
                            <CardImg top width="25%" src={favorite.imageURL} alt="Recipe Image" />
                            <CardBody >
                                <CardTitle tag="h5">{favorite.title}</CardTitle>
                                <Button>Delete</Button>
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
