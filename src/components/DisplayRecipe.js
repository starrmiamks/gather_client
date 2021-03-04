import React, { useEffect, useState } from 'react';
// import {
//     Card, CardImg, CardBody,
//     CardTitle, Button
// } from 'reactstrap';

const DisplayRecipe = () => {
    const [results, setResults] = useState([]);

    useEffect (() => {
        fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=ab4135366ad64eb3853c09a4d1973af4&includeNutrition=true')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setResults(json)
            })
        }, [])

    //     const addRecipe = (resultId, imageURL, title) => {
    //         console.log({ resultId, imageURL, title })
            
    //         fetch(`http://localhost:3000/favorites/add`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 favorites: {
    //                     recipeId: recipeId,
    //                     imageURL: imageURL,
    //                     title: title
    //                 }
    //             })
    //         })
    //             .then(res => console.log(res.json()))
    //     }
    // }

    return (
        <div>
            {/* {results.map(result => {
                return (
                    <div>
                        {result.title}
                        {result.image}
                    </div>
                )
            })} */}
        </div>
    )
}

export default DisplayRecipe