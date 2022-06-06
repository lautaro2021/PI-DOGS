import React from 'react'
import loader3 from '../images/Loader3.gif';

import {StyledLoader} from './styles/StyledLoader';

function Loader() {
  return (
    <StyledLoader>
        <div className = "container_loader">
          <img src={loader3}></img>
        </div>
    </StyledLoader>
  )
  }
export default Loader;