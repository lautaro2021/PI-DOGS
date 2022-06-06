const {Router} = require('express');
const axios = require('axios');
const {Dog, Temperament} = require('../db.js');
const {
    API_KEY
  } = process.env;

const router = Router();

const getDogsApi = async() => {
    try {
        const dataApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        const dogsApi = dataApi.data.map( d => {
            return {
                id: d.id,
                name: d.name,
                weight: d.weight.metric,
                image:d.image.url,
                temperaments: d.temperament,
            }
        })
        return dogsApi;
    } catch (error) {
        console.log(error)
    }
}

const getDogsDb = async () => {
    const dataBd = await Dog.findAll({
        attributes: ['id', 'name', 'weight','image'],
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
    return dataBd;
} 

const getAllDogs = async () => {
    const data1 = await getDogsApi();
    const data2 = await getDogsDb();
    const finalData = data1.concat(data2);
    return finalData;
}

const getDetails = async() => {
    try {
        const dataApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        const dogsApi = dataApi.data.map( d => {
            return {
                id:d.id, 
                name:d.name, 
                weight: d.weight.metric , 
                height:d.height.metric , 
                image:d.image.url , 
                life_span:d.life_span,
                temperaments:d.temperament, 
            }
        })
        return dogsApi;
    } catch (error) {
        console.log(error)
    }

}

const getDogsDbDetails = async () => {
    const dataBd = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
    return dataBd;
} 

const getAllDetails = async() => {
    const data1 = await getDetails();
    const data2 = await getDogsDbDetails();
    const finalDetails = data1.concat(data2);
    return finalDetails;
}

module.exports = { 
    router,
    getAllDogs,
    getAllDetails,
}
    
    