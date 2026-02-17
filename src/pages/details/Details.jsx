import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./details.css";
function Details() {
  //const mealid= useParams().mealid;
  const { mealid } = useParams();
  const [intructions, setIntructions] = useState();

  useEffect(() => {
    const getIntructionData = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      setIntructions(response.data.meals[0]);
      console.log(response.data.meals[0]);
    };
    getIntructionData();
  }, [mealid]);

  if (!intructions) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <section>
      <div className="details-img">
        <img src={intructions.strMealThumb} />
      </div>
      <div className="details-content">
        <h2>Recipe Details</h2>
        <span>{intructions.strMeal}</span>
        <h3>Intructions:</h3>
        <p>{intructions.strInstructions}</p>
      </div>
    </section>
    <p className="conact-me-d">
        By {" "}
        <a
          href="mailto:firassrachid2000@gmail.com"
          target="_blank"
        >
        Firass Rachid
        </a>
        {' _ '}
        <a  href="https://api.whatsapp.com/send?phone=963937898507" target="_blank">
        whatsapp
        </a>
      </p>
      </>
  );
}

export default Details;
