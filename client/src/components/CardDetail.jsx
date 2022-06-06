import { Link, useParams,} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import { getAllDetails, cleanUpDetails } from "../actions/index";
import Loader from "./Loader";
import iso from "../images/Details/iso.png";
import dog from '../images/Card/dog.png';
import bascula from '../images/Card/bascula.png';
import regla from '../images/Details/regla.png';
import heart from '../images/Details/heart.png';

import { StyledDetail } from "./styles/StyledDetail";

function CardDetail() {
  const dogs = useSelector((state) => state.details);
  const { id } = useParams();
  const dispatch = useDispatch();
  const temps = [];

  useEffect(() => {
    dispatch(getAllDetails(id));
  }, [dispatch, id]);

  dogs.map((d) => {
    if (d.temperaments !== undefined && typeof d.temperaments !== "string") {
      d.temperaments.map((t) => {
        temps.push(t.name);
      });
    }
  });

  function handleClick(e){
      e.preventDefault(e);
      alert("Thanks for all watching my FullStack Proyect!")
  }

  function handleClear(e){
    dispatch(cleanUpDetails())
  }

  return (
    <StyledDetail>
      <div className="header_detail">
        <Link to="/home">
          <button className="header_button" onClick = {e => handleClear(e)}>Go Home</button>
        </Link>
        <img src={iso} className="header_iso"></img>
        <button className="details_h1" onClick={e => handleClick(e)}>Click me!</button>
      </div>
      <div className="body_detail">
        {!dogs.length ? (
          <Loader />
        ) : (
          dogs.map((d) => {
            return (
              <div className="body_card">
                <div className="img_container">
                  <img src={d.image}></img>
                </div>
                <div className="info_container">
                  <div className="info">
                    <h2>{d.name && d.name}</h2>
                    <div className = "containers_info">
                        <img src={bascula} height="50px"></img>
                        <h3><b>Weight:</b> {d.weight + " kg"}</h3>
                    </div>
                    <div className = "containers_info">
                        <img src={regla} height="50px"></img>
                        <h3><b>Height:</b> {d.height + " cm"}</h3>
                    </div>
                    <div className = "containers_info">
                        <img src={heart} height="50px"></img>
                        <h3><b>Life Span: </b>{d.life_span}</h3>
                    </div>
                    <div className = "containers_info">
                        <img src={dog} height="50px"></img>
                        <div className = "temperaments_container">
                        <p>
                        <b>Temperament</b>:{" "}
                        {typeof d.temperaments == "string"
                            ? d.temperaments
                            : d.temperaments && temps.join(", ")}
                        </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </StyledDetail>
  );
}

export default CardDetail;
