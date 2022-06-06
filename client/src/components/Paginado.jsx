import React from "react";

import { StyledPaginate } from "./styles/StyledPaginate";




function Paginado({ dogsPerPage, allDogs, paginado, toggle }) {
  const pageNumbers = []; // -> armo un arreglo con cada uno de los numeros de pagina
  const rounded = Math.ceil(allDogs / dogsPerPage); // --> determino la cantidad de paginas

  for (let i = 1; i <= rounded; i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPaginate>
      {toggle == "OFF" ? 
        <div className="conteiner_div_paginado">
        <ul className="ul_paginado">
          {/* renderizo las paginas */}
          {pageNumbers?.map((n) => (
            <li key={n} className="li_paginado">
              <a onClick={() => paginado(n)} className="a_paginado">
                {n}
              </a>
            </li>
          ))}
        </ul>
      </div> :
      <div className="conteiner_div_paginado_ON">
      <ul className="ul_paginado">
        {/* renderizo las paginas */}
        {pageNumbers?.map((n) => (
          <li key={n} className="li_paginado_ON">
            <a onClick={() => paginado(n)} className="a_paginado">
              {n}
            </a>
          </li>
        ))}
      </ul>
    </div>
      
      }
     
    </StyledPaginate>
  );
}

export default Paginado;
