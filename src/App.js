import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";
import LOGO from './assets/img/logo.png';

function App() {
  const [items, setItem] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=ca7b5432f9519a561453e24ad0132281&hash=60f90beb73b92a462b60de850fe2982f"
    )
      .then((response) => response.json())
      .then((json) => {
        setItem(json.data.results);
      });
  }, []);

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  const character = (e) => {
    e.preventDefault();
    if (search === "") {
      fetch(
        "https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=ca7b5432f9519a561453e24ad0132281&hash=60f90beb73b92a462b60de850fe2982f"
      )
        .then((response) => response.json())
        .then((json) => {
          setItem(json.data.results);
        });
    } else {
      fetch(
        "https://gateway.marvel.com/v1/public/characters?nameStartsWith=" +
          search +
          "&ts=1000&apikey=ca7b5432f9519a561453e24ad0132281&hash=60f90beb73b92a462b60de850fe2982f"
      )
        .then((response) => response.json())
        .then((json) => {
          setItem(json.data.results);
        });
    }
  };

  return (
    <div className="container">
      <div className="container-search">
        <img className="logo" src={LOGO} alt="logo" />
        <form>
          <input type="search" placeholder="Type a marvel character" onChange={changeSearch} onKeyUp={character} />
        </form>
      </div>
      <div className="container-cards">
        {items.map((item) => {
          let URL = item.thumbnail.path + "." + item.thumbnail.extension;
          URL = URL.replace("http", "https");
          return <Card key={item.id} url={URL} name={item.name} description={item.description} />;
        })}
      </div>
    </div>
  );
}

export default App;
