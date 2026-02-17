import { NavLink } from "react-router";
import "./card.css";
function Card({ data }) {
  return (
    <>
      {!data 
        ? <h2 className="soory-h2">Soory Data Not Found</h2>
        : data.map((card) => {
            return (
              <div key={card.idMeal} className="card-container">
                <img src={card.strMealThumb} />
                <div className="p-b-div">
                  <h3>{card.strMeal}</h3>
                  <NavLink to={`/${card.idMeal}`}><button>Recipe</button></NavLink>
                </div>
              </div>
            );
          })}
    </>
  );
}

export default Card;
