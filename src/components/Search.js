import React, { useState } from 'react';
// import {
//     Navbar,
//     NavbarBrand,
// } from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';
import SearchForm from './SearchForm'

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
            <div className="search">
                <h1 className="searchBox">SEARCH RECIPES</h1>
                <input value={recipeSearch} onChange={e => setRecipeSearch(e.target.value)} placeholder="Enter search term" />
                <br></br>
                <br></br>
                <Button onClick={fetcher} className="searchButton">Search</Button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {recipes.map(recipe => {
                return (
                    <div key={recipe.id}>
                        <Card className="resultsCard" style={{width: "25%", height: "60%"}}>
                            <CardImg top width="100%" src={recipe.image} alt="Recipe Image" />
                            <CardBody>
                                <CardTitle tag="h5">{recipe.title}</CardTitle>
                                <Button onClick={e => addRecipe(`${recipe.id}`, `${recipe.image}`, `${recipe.title}`)}>Add Recipe</Button>
                            </CardBody>
                        </Card>
                    </div>
                )
            })}
            <SearchForm addRecipe={addRecipe} />
        </div >
    );
};

export default Search;



