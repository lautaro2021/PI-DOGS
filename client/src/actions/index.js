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
export const CLEAN_UP_DETAIL = "CLEAN_UP_DETAIL";


export function getAllDogs() {
    return async(dispatch) => {
        try{
            let res = await axios.get('/dogs')
            dispatch({type: GET_ALL_DOGS, payload: res.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export function getAllTemperaments() {
    return async(dispatch) => {
        try {
            let res = await axios.get('/temperament')
            dispatch({type: GET_ALL_TEMPERAMENTS, payload: res.data})
        } catch (error) {
            console.log(error)
        }
        
    }
}

export function getNames(name){
    return async(dispatch) => {
        try{
            let res = await axios.get(`/dogs?name=${name}`)
            dispatch({type: GET_NAMES, payload: res.data})
        }
        catch(error){
            console.log(error)
        }
    }
}

export function getAllDetails(id){
    return async(dispatch) => {
        try {
            let res = await axios.get(`/dogs/${id}`)
            dispatch({type: GET_ALL_DETAILS, payload: res.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export function postDog(payload){
    return async function(dispatch){
        const resp = axios.post("/dog", payload)
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

export function cleanUpDetails(){
    return{
        type: 'CLEAN_UP_DETAIL',
        payload: []
    }
}

export function cleanUp(){
    return{
        type: 'CLEAN_UP',
        payload: []
    }
}

