import {GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_ALL_DETAILS, GET_NAMES, FILTER_BY_NAME, FILTER_BY_TEMPERAMENT, ORDER_BY_NAME, ORDER_BY_WEIGHT, POST_DOG, CLEAN_UP_DETAIL, CLEAN_UP} from '../actions/index.js';

const initialState = {
    dogs: [],
    allDogs: [],
    details: [],
    temperaments: [],
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case GET_ALL_DOGS:
            return{
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case GET_ALL_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload
            }
        case GET_ALL_DETAILS:
            return{
                ...state,
                details: action.payload
                }
        case CLEAN_UP_DETAIL:
            return{
                ...state,
                details: action.payload
            }
        case GET_NAMES:
            return{
                ...state,
                dogs: action.payload
            }
        case POST_DOG:
            return{
                ...state,
            }
        case FILTER_BY_NAME:
            const allDogs = state.allDogs;
            const statusFilter = action.payload
            if(statusFilter){
                var dogsFiltered = allDogs.filter(d => d.name === action.payload)
            }
            return{
                ...state,
                dogs: dogsFiltered
            }
        case FILTER_BY_TEMPERAMENT:
            const allDogsTemps = state.allDogs;
            const tempsFilter = action.payload;
            let arr = [];
            if(tempsFilter){
                allDogsTemps.forEach(d => {
                    if(d.temperaments && typeof d.temperaments === 'string'){
                        if(d.temperaments.includes(action.payload)) arr.push(d);
                    }else if(d.temperaments && typeof d.temperaments !== 'string'){
                        d.temperaments.map(t => {
                            if(t.name.includes(action.payload)) arr.push(d);
                        })
                    }
                })
            }
            return{
                ...state,
                dogs: arr,
            }
        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'nameAsc' ? 
                state.dogs.sort(function(a, b) {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    if(b.name.toLowerCase() > a.name.toLowerCase()) return -1;
                    return 0;
                }) :
                state.dogs.sort(function(a, b) {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    if(b.name.toLowerCase() > a.name.toLowerCase()) return 1;
                    return 0;
                })

            return {
                ...state,
                dogs: sortedArr
            }
        case ORDER_BY_WEIGHT:
            //pusheo spliteado
            let b = [];
            state.dogs.forEach(d => {
                b.push({
                    ...d,
                    "weight": d.weight.split(" - ")
                 })
            })
            //elimino los NaN
            let c = [];
            b.forEach(d => {
                if(d.weight[0] !== 'NaN') c.push({...d})
                else if(d.weight[0] === 'NaN'){
                    c.push({
                       ...d,
                       "weight": [d.weight[1]]
                    })}
            })
            //elimino los undefined
            let e = [];
            c.forEach(d => {
               if(d.weight[0]) e.push({...d})
            })
            let status = action.payload
            if(status == 'weightAsc'){
                e.sort(function(a, b){
                    if(Number(a.weight[0]) > Number(b.weight[0])) return 1;
                    else if(Number(b.weight[0]) > Number(a.weight[0])) return -1;
                    else if(Number(a.weight[0]) === Number(b.weight[0])) {
                        if(Number(a.weight[1]) > Number(b.weight[1])) return 1;
                        else if(Number(b.weight[1]) > Number(a.weight[1])) return -1;
                        return 0;
                    }
                })
            }else e.sort(function(a, b){
                if(Number(a.weight[0]) > Number(b.weight[0])) return -1;
                else if(Number(b.weight[0]) > Number(a.weight[0])) return 1;
                else if(Number(a.weight[0]) === Number(b.weight[0])) {
                    if(Number(a.weight[1]) > Number(b.weight[1])) return -1;
                    else if(Number(b.weight[1]) > Number(a.weight[1])) return 1;
                    return 0;
                }
            })
            let f = [];
            e.forEach(d =>{
                f.push({
                    ...d,
                    "weight": d.weight.join(" - ")
                })
            })
            return {
                ...state,
                dogs: f
            }
        default: return state;
    }
}

export default rootReducer;