const {Router} = require('express');
const axios = require('axios');
const {Temperament} = require('../db.js');
const {
    API_KEY
  } = process.env;

const router = Router();

const getTemps = async() => {
    const getInfo = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const temps = await getInfo.data.map(t => t.temperament && t.temperament.split(", "));
    const arr = temps.flat();
    const tempsFiltered = arr.reduce((i, t) =>{
        if(!i.includes(t)) i.push(t)
        return i
    }, [])

    tempsFiltered.forEach(async t => {
      if(t){
        await Temperament.findOrCreate({
             where: {name: t}
      })
      }
    })
    const allTemps = await Temperament.findAll();
    return allTemps;
}

module.exports = {
    router,
    getTemps,
}