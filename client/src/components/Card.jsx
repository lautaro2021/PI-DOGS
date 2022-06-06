import {useState} from 'react';
import { Link } from "react-router-dom";
import { StyledCard } from "./styles/StyledCard";
import dog from '../images/Card/dog.png';
import bascula from '../images/Card/bascula.png';

function Card({ id, name, temperament, image, weight }) {
  const temps = [];

  if (temperament !== undefined && typeof temperament !== "string") {
    temperament.map((t) => {
      temps.push(t.name);
    });
  }

  
  return (
    <StyledCard>
      <div className="container_card">
        <div className="hijo_card">
          <div className="img_card">
            <Link to={`/dogDetail/${id}`}>
              <img src={image} alt={"image"} className="img" />
            </Link>
          </div>
        </div>
        <div className="info_card">
          <h2 className="name_card">{name}</h2>
          <div className="weight_container">
            <div className="bascula">
              <img src={bascula}></img>
            </div>
            <div className="weight">
              <p className="weight_card">Weight: {weight} kg</p>
            </div>
          </div>
          <div className="Temperaments_container">
            <div className = "dog">
              <img src = {dog}></img>
            </div>
            <div className = "temperaments">
              <p className="p_card">
              {typeof temperament == "string"
                ? temperament
                : temperament && temps.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}
export default Card;
