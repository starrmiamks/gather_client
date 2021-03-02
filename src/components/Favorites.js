
import React from 'react';
import {useState, useEffect} from 'react';
import FavoritesCard from './FavoritesCard';

const Favorites = () => {
    // return must have one parent element
    const [favorites, setFavorites] = useState()

    useEffect(()=>{
        getFavorites(10)
    },[])
    // Helper Function
    const getFavorites = (n) => {
        let tmp = []
        for (let i = 0; i < n; i++){
            tmp.push(
                <FavoritesCard />
            )
        }
        setFavorites(tmp)
    }

    const fetchFavorites = () => {
        fetch('http://localhost:3000/favorites/mine/${favorites.userid}', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
            })
        }) .then( (res) => res.json())
          .then((favoritesData) => {
               setFavorites(favoritesData)
               console.log(favoritesData);
           }) 
    }

    return (
        <div className="container">
        <div className="row justify-content-center">
            {favorites}
        </div>
    </div>
    )
}





 export default Favorites;

