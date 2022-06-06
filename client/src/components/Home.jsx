import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDogs,
  getAllTemperaments,
  filterName,
  filterTemperament,
  orderByName,
  orderByWeight,
} from "../actions/index.js";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import Loader from "./Loader";

import { StyledHome } from "./styles/StyledHome";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const allEveryDog = useSelector((state) => state.allDogs);
  const allTemperaments = useSelector((state) => state.temperaments);

  const arr = [];
  allTemperaments.forEach((t) => arr.push(t));

  //Paginado
  const [currentPage, setCurrentPage] = useState(1); //pagina actual (arranca en 1)
  const [dogsPerPage, setDogsPerPage] = useState(8); //cantidad de perros por pagina
  const indexOfLastDog = currentPage * dogsPerPage; //determino la posicion del ultimo
  const indexOfFirstDog = indexOfLastDog - dogsPerPage; //determino la posicion del primero
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog); //guardo los perros a renderizar por pagina

  const rounded = Math.ceil(allDogs.length / dogsPerPage);

  if(currentPage != 1 && currentPage > rounded){
    setCurrentPage(rounded)
  }

  //Ordenamiento
  const [order, setOrder] = useState("");
  const [orderWeight, setOrderWeight] = useState("");

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, []);

  //filtrado por nombre
  function handleFilterName(e) {
    e.preventDefault(e);
    dispatch(filterName(e.target.value)); //tomo el value del input
  }

  //filtrado por temperamento
  function handleFilterTemperament(e) {
    e.preventDefault(e);
    dispatch(filterTemperament(e.target.value));
  }

  //ordenamiento por nombre
  //evaluo el tipo de dato para que no rompa al intentar filtrar despues de una busqueda sin resultados
  function handleOrderByName(e) {
    e.preventDefault(e);
    if(typeof currentDogs != 'string'){
      setCurrentPage(1); //seteo mi currentePage en la inicial
      dispatch(orderByName(e.target.value));
      setOrder(`Ordenated ${e.target.value}`); //creo un state local que me permita renderizar el ordenamiento
      console.log(currentDogs)
    }
  }

  //ordenamiento por peso
  //evaluo el tipo de dato para que no rompa al intentar filtrar despues de una busqueda sin resultados
  function handleOrderByWeight(e) {
    e.preventDefault(e);
    if(typeof currentDogs != 'string'){
      setCurrentPage(1);
      dispatch(orderByWeight(e.target.value));
      setOrderWeight(`Ordenated ${e.target.value}`);
    }
  }

  //modo oscuro
  const [light, setLight] = useState("OFF")
  function handleLight(e){
    e.preventDefault(e);
    light == "OFF" ? setLight("ON") : setLight("OFF"); 
  }

  return (
    <StyledHome>
      <div className = "home_container" id={light}>
      <header>
        <div className="container_header" id = {light}>
            <div  className = "container" id = {light}>
              <button className = "indicator" onClick={e => handleLight(e)}></button>
            </div>
            <Link to="/create">
              <button  className= "header_createButton" id ={light}>Create Dog</button>
            </Link>
            <button onClick={() => window.location.reload()} className= "header_createButton" id ={light}>Refresh</button>
          {/* ordenamientos y filtrados */}
            {/* ordenamiento por nombre */}
            <div className = "container_order">
            <select onChange={(e) => handleOrderByName(e)} className = "header_orderButtons" id={light}>
              <option hidden>Order Name</option>
              <option value="nameAsc">Asc</option>
              <option value="nameDesc">Desc</option>
            </select>
            {/* ordenamiento por peso */}
            <select onChange={(e) => handleOrderByWeight(e)} className = "header_orderButtons">
              <option hidden>Order Weight</option>
              <option value="weightAsc">Asc</option>
              <option value="weightDsc">Desc</option>
            </select>
            </div>
            {/* filtrado por raza */}
            <select onChange={(e) => handleFilterName(e)} className = "header_orderButtons">
              <option hidden>Razes</option>
              {allEveryDog ? (
                allEveryDog.map((d) => {
                  return (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  );
                })
              ) : (
                <h1>Not Results Found</h1>
              )}
            </select>
            {/* filtrado por temperamento */}
            <select onChange={(e) => handleFilterTemperament(e)} className = "header_orderButtons">
              <option hidden>Temperaments</option>
              {arr.length ? (
                arr.map((t) => {
                  return (
                    <option key={t.name} value={t.name}>
                      {t.name}
                    </option>
                  );
                })
              ) : (
                <h1>Not Results Found</h1>
              )}
            </select>
          {/* searchBar */}
          <div>
            <SearchBar />
          </div>
        </div>
      </header>
      {/* renderizado tarjetas */}
      <div className = "div2">
        <div className = "masterDiv">
          <div className="div_hijo_home">
          {!currentDogs.length ? (
            <Loader />
          ) : (
            typeof currentDogs === "string" ? (
            <div className ="no_results">
              <div className = "h1" id={light}>
                <h1>No Results Found</h1>
              </div>
              <div className = "loader_home">
                <Loader/>
              </div>
            </div>
            ):
            currentDogs?.map((d) => {
              return (
                <Card
                  key={d.id}
                  name={d.name}
                  image={d.image}
                  weight={d.weight}
                  temperament={d.temperaments}
                  id={d.id}
                />
              );
            })
          )}
          </div>
          </div>
        </div>
      {/* paginado */}
      {typeof allDogs != 'string' ?
      <Paginado
      dogsPerPage={dogsPerPage}
      allDogs={allDogs.length}
      paginado={paginado}
      toggle={light}
      /> 
      : ""
      }
      
    </div>
    </StyledHome>
  );
}
