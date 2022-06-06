import axios from 'axios';
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const GET_ALL_DETAILS = "GET_ALL_DETAILS";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const GET_NAMES = "GET_NAMES";
export const POST_DOG = "POST_DOG";

export function getAllDogs() {
    return function(dispatch){
        return fetch('http://localhost:3001/dogs')
        .then(r => r.json())
        .then(data => dispatch({type: GET_ALL_DOGS, payload: data}))
        .catch(e => console.log(e))
    }
}

export function getAllTemperaments() {
    return async(dispatch) => {
        try {
            let res = await axios.get('http://localhost:3001/temperament')
            dispatch({type: GET_ALL_TEMPERAMENTS, payload: res.data})
        } catch (error) {
            console.log(error)
        }
        
    }
}

export function getNames(name){
    return function(dispatch){
        return fetch(`http://localhost:3001/dogs?name=${name}`)
        .then(r => r.json())
        .then(data => dispatch({type: GET_NAMES, payload: data}))
        .catch(e => console.log(e))
    }
}

export function getAllDetails(id){
    return function(dispatch){
        return fetch(`http://localhost:3001/dogs/${id}`)
        .then(r => r.json())
        .then(data => dispatch({type: GET_ALL_DETAILS, payload: data}))
        .catch(e => console.log(e))
    }
}

export function postDog(payload){
    return async function(dispatch){
        const resp = axios.post("http://localhost:3001/dog", payload)
        return resp;
    }
}

export function filterName(payload) {
    return {
        type: FILTER_BY_NAME,
        payload,
    }
}

export function filterTemperament(payload){
    return {
        type: FILTER_BY_TEMPERAMENT,
        payload
    }
}

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByWeight(payload) {
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
}

