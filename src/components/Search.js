import React, { useState } from 'react';
// import {
//     Navbar,
//     NavbarBrand,
// } from 'reactstrap';
import {
    Container, CardImg, CardBody,
    CardTitle, Button, Col, Row
} from 'reactstrap';
import SearchForm from './SearchForm'
import Background from './Banner';
import './Search.css';
// import styled from 'styled-components'

const Search = (props) => {
    const [recipeSearch, setRecipeSearch] = useState("");
    const [recipes, setRecipes] = useState([]);

    const fetcher = () => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ab4135366ad64eb3853c09a4d1973af4&query=${recipeSearch}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setRecipes(json.results)
            })
    }

    const addRecipe = (recipeId, imageURL, title) => {
        console.log({ recipeId, imageURL, title })
        fetch(`http://localhost:3000/favorites/add`, {
            method: "POST",
            headers: new Headers ( {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            }),
            body: JSON.stringify({
                favorites: { 
                    recipeId: recipeId,
                    imageURL: imageURL,
                    title: title
                }
            })
        })
            .then(res => console.log(res.json()))
    }

    return (
        <div>
            <Background/>
            <div className="search">
                <h1 className="searchBox" >SEARCH RECIPES</h1>
                <input class="rounded" style={{width: "25%"}} value={recipeSearch} onChange={e => setRecipeSearch(e.target.value)} placeholder="Enter search term" />
                <br></br>
                <br></br>
                <Button type = "button" color = "primary" className = "searchButton" onClick={fetcher}>Search</Button>
                
            </div>
           
                <Container id="recipe-grid-container">
            <Row>
            {recipes.map(recipe => {
                return (
                    <Col key={recipe.id} lg="4" sm="6" xs="12" className="grid-column">
                        <div className="resultsCard" 
                        // style={{width: "25%", height: "60%"}}
                        >
                            <CardImg top width="25%" src={recipe.image} alt="Recipe Image" />
                            <CardBody  //style={{backgroundColor: "white"}}//
                            >
                                <CardTitle tag ="h5">{recipe.title}</CardTitle>
                                <Button onClick={e => addRecipe(`${recipe.id}`, `${recipe.image}`, `${recipe.title}`)}>Add Recipe</Button>
                            </CardBody>
                        </div>
                       
                    </Col>
                )
            })}
            <SearchForm addRecipe={addRecipe} />
            </Row>
            </Container>
        </div >
    );
};

export default Search;



