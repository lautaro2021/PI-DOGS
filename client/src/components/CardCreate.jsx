import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postDog, getAllTemperaments } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import eliminar from "../images/Create/eliminar.png";
import dog_gif from "../images/Create/dog_gif.gif";
import bascula from "../images/Card/bascula.png";
import dog from "../images/Card/dog.png";
import regla from "../images/Card/gobernante.png";
import heart from "../images/Details/heart.png";

import { StyledCreate } from "./styles/StyledCreate";

//validacion
function validate(input) {
  var errors = {};
  let urlValidator = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    if (!input.name) errors.name = "Name cannot be null";
    else if (!input.heightMax || input.heightMax < 1 || input.heightMax > 100)
      errors.heightMax = "Please set correct Max Height (max 100)";
    else if (!input.heightMin || input.heightMin < 1 || Number(input.heightMin) >= Number(input.heightMax))
      errors.heightMin = "Please set correct Min Height (max 100)";
    else if (!input.weightMax || input.weightMax < 1 || input.weightMax > 100)
      errors.weightMax = "Please set correct Max Weight (max 100)";
    else if (!input.weightMin || input.weightMin < 1 || Number(input.weightMin) >= Number(input.weightMax))
      errors.weightMin = "Please set correct Min Weight (max 100)";
    else if (input.life_spanMax && (!input.life_spanMin ||input.life_spanMax < 1 || input.life_spanMax > 100))
      errors.life_spanMax = "Please set correct Max and Min Life Span (max 50)";
    else if (input.life_spanMin && (!input.life_spanMax ||input.life_spanMin < 1 || Number(input.life_spanMin) >= Number(input.life_spanMax)))
      errors.life_spanMin = "Please set correct Min and Max Life Span (max 50)";
    else if (!input.image || urlValidator.test(input.image) == false) errors.image = "Image cannot be null or incorrect (png, gif, jpg)";
  
    return errors;
}

function DogCreate() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [selectedTemps, setSelectedTemps] = useState([]);
  let temps = [];

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, []);


  //creo el form
  const [input, setInput] = useState({
    name: "",
    heightMax: "",
    heightMin: "",
    weightMax: "",
    weightMin: "",
    life_spanMax: "",
    life_spanMin: "",
    image: "",
    temperaments: [],
  });

  //creo otro objeto para poder darle el formato al form que el back necesita para lanzar la action
  const jsonDog = {
    name: input.name,
    weight: `${input.weightMin} - ${input.weightMax}`,
    height: `${input.heightMin} - ${input.heightMax}`,
    image: input.image,
    life_span: `${input.life_spanMin} - ${input.life_spanMax} years`,
    temperaments: input.temperaments,
  };

  input.temperaments.forEach((t) => {
    temperaments.map((tt) => {
      if (t === tt.id && !temps.includes(tt.name)) temps.push(tt.name);
    });
  });


  //creo un handle que apunte al name del input y modifique mi state
  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleTemperaments(e) {
    e.preventDefault();
    setInput({
      ...input,
      temperaments: [...input.temperaments, !input.temperaments.includes(e.target.value) && e.target.value],
    });
    setSelectedTemps([...selectedTemps, e.target.value])
  }

  //limpieza filtro temp
  function handleCleanTemp(e){
    e.preventDefault();
    if(selectedTemps.length){
      setSelectedTemps([]);
      input.temperaments = [];
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(input.temperaments.length){
      dispatch(postDog(jsonDog));
      alert("Dog created!");
      setInput({
        name: "",
        heightMax: "",
        heightMin: "",
        weightMax: "",
        weightMin: "",
        life_spanMax: "",
        life_spanMin: "",
        image: "",
        temperaments: [],
      });
      //redirecciono al usuario al home
      navigate("/home");
    }else alert("Please select almost one temperament")
  }

  function handleRefresh(e){
    e.preventDefault();
    setInput({
      name: "",
      heightMax: "",
      heightMin: "",
      weightMax: "",
      weightMin: "",
      life_spanMax: "",
      life_spanMin: "",
      image: "",
      temperaments: [],
    })
    setSelectedTemps([]);
  }

  return (
    <StyledCreate>
      <div className="create_container">
        <div className="create_header">
          <Link to="/home">
            <button>Return</button>
          </Link>
          <button
            onClick={(e) => handleRefresh(e)}
            className="header_createButton"
          >
            Refresh
          </button>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="full_cont">
            <div className="form_container">
              <div className="form">
                <h1 className = "create_dog">Create Dog!</h1>
                <div className="form_2">
                  <div className="name">
                    <label>Name*: </label>
                    <input
                      className = "input"
                      type="text"
                      value={input.name}
                      name="name"
                      onChange={(e) => handleChange(e)}
                    ></input>
                  </div>
                  <div className="height">
                    <label>Height Max*: </label>
                    <input
                      className = "input2"
                      type="number"
                      value={input.heightMax}
                      name="heightMax"
                      onChange={(e) => handleChange(e)}
                      min="1"
                      max="100"
                    ></input>
                  </div>
                  <div className="height">
                    <label>Height Min*: </label>
                    <input
                      className = "input2"
                      type="number"
                      value={input.heightMin}
                      name="heightMin"
                      onChange={(e) => handleChange(e)}
                      min="1"
                      max="100"
                    ></input>
                  </div>
                  <div className="weight">
                    <label>Weight Max*: </label>
                    <input
                      className = "input2"
                      type="number"
                      value={input.weightMax}
                      name="weightMax"
                      onChange={(e) => handleChange(e)}
                      min="1"
                      max="100"
                    ></input>
                  </div>
                  <div className="weight">
                    <label>Weight Min*: </label>
                    <input
                      className = "input2"
                      type="number"
                      value={input.weightMin}
                      name="weightMin"
                      onChange={(e) => handleChange(e)}
                      min="1"
                      max="100"
                    ></input>
                  </div>
                  <div className="lifes">
                    <label>Life Span Max: </label>
                    <input
                      className = "input2"
                      type="number"
                      value={input.life_spanMax}
                      name="life_spanMax"
                      onChange={(e) => handleChange(e)}
                      min="1"
                      max="50"
                    ></input>
                  </div>
                  <div className="lifes">
                    <label>Life Span Min: </label>
                    <input
                      className = "input2"
                      type="number"
                      value={input.life_spanMin}
                      name="life_spanMin"
                      onChange={(e) => handleChange(e)}
                      min="1"
                      max="50"
                    ></input>
                  </div>
                  <div className="img">
                    <label>Image URL*: </label>
                    <input 
                      className = "input"
                      type="url"
                      value={input.image}
                      name="image"
                      onChange={(e) => handleChange(e)}
                    ></input>
                  </div>
                  <div className="temperament">
                    <label>Temperament*: </label>
                    <select onChange={(e) => handleTemperaments(e)} id = "temps">
                      <option hidden>Select almost one</option>
                      {temperaments?.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                    {selectedTemps.length ? <button onClick ={e => handleCleanTemp(e)} className = "filter_temp">x</button> : <button hidden="true">x</button>}
                  </div>
                </div>
              </div>
              {/* Validacion errores */}
              {!Object.keys(errors).length ? (
                ""
              ) : (
                <div className="container_errors">
                  <div>
                    <img src={eliminar}></img>
                  </div>
                  <div>
                    {errors.name && <p>{errors.name}</p>}
                    {errors.heightMax && <p>{errors.heightMax}</p>}
                    {errors.heightMin && <p>{errors.heightMin}</p>}
                    {errors.weightMax && <p>{errors.weightMax}</p>}
                    {errors.weightMin && <p>{errors.weightMin}</p>}
                    {errors.life_spanMax && <p>{errors.life_spanMax}</p>}
                    {errors.life_spanMin && <p>{errors.life_spanMin}</p>}
                    {errors.image && <p>{errors.image}</p>}
                  </div>
                </div>
              )}
            </div>
            <div className="ul_container">
              <div className="ul">
                <ul>
                  <div className="li_container">
                    <div className="img_cont">
                      <li className="li_img">
                        {input.image ? (
                          <img src={input.image} className="img2"></img>
                        ) : (
                          <img
                            src={dog_gif}
                            alt="Select dog image"
                            className="img2"
                          ></img>
                        )}
                      </li>
                    </div>
                    <div className="info_li_container">
                      <li className="li">
                        <h3>{input.name}</h3>
                      </li>
                      <li className="li">
                        <img src={regla} height="25px" width="25px"></img>
                        <p>
                          {input.heightMin + " - " + input.heightMax + " cm"}
                        </p>
                      </li>
                      <li className="li">
                        <img src={bascula} height="25px" width="25px"></img>
                        <p>
                          {input.weightMin + " - " + input.weightMax + " kg"}
                        </p>
                      </li>
                      <li className="li">
                        <img src={heart} height="25px" width="25px"></img>
                        <p>
                          {input.life_spanMin +
                            " - " +
                            input.life_spanMax +
                            " years"}
                        </p>
                      </li>
                      {
                        <li className="li">
                          <img src={dog} height="25px" width="25px"></img>
                          <p className="p_temp">{temps.map((t) => t + ", ")}</p>
                        </li>
                      }
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="button">
            {!Object.keys(errors).length && input.name.length ? (
              <button type="submit" className="ok_button">
                Create!
              </button>
            ) : (
              <button type="submit" hidden="true">
                Create
              </button>
            )}
          </div>
        </form>
      </div>
    </StyledCreate>
  );
}

export default DogCreate;
