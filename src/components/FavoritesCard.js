import Favorites from './Favorites';

const FavoritesCard = () => {
    // return must have one parent element
    const styles = {
        card: {
            "min-width": "100px",
            "max-width": "250px"
        },
        img: {
            "margin": "auto",
            "margin-top": "20px",
            "max-width": "100px",
            "max-height": "100px"
        }
    }
    return (
        <div className="card">
                <img src={Favorites}
                      alt="..." />
                <div className="card-body  text-center">
                    <h5 className="card-title">Recipe Title</h5>
                    <a href="" className="btn btn-primary">View Recipe</a>
                </div>
        </div>

    )
}

// Makes it available for import
export default FavoritesCard;