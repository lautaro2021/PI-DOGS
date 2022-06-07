import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getNames } from '../actions';

import {StyledSearchBar} from './styles/StyledSearchBar'

function SearchBar() {
  //seteo un local state para tomar el valor del input
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  //hanlde para tomar el valor del input
  function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value);
  }
  //handle para despachar la action
  function handleSubmit(e){
      e.preventDefault();
      dispatch(getNames(name))
      setName("")
  }

  return (
      <StyledSearchBar>
        <div className = "container_search">
          <input type="text" placeholder="  Search Dog" onChange = {e => handleInputChange(e)} value={name} className = "input"/>
          <button type="submit" onClick = {e => handleSubmit(e)} className = "button"></button>
        </div>
      </StyledSearchBar>
  )
}

export default SearchBar;