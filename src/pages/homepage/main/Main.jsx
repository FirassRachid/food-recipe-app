import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import "./main.css";
import "./header.css";
function Main() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handelInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getMealData = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      setData(response.data.meals);
    };
    getMealData();
  }, [search]);
  return (
    <>
      <header>
        <h1>FOOD RECIPE APP</h1>
        <div className="search-div">
          <input onChange={handelInput} type="text" placeholder="Search Meal" />
        </div>
        <h2>Your Search Results</h2>
      </header>
      <main>
        <Card data={data} />
      </main>
      <p className="conact-me">
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

export default Main;
