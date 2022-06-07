const {Dog, Temperament} = require('../../db.js');
const {getAllDogs, getAllDetails} = require('../../controllers/Dog.controller.js');
const {getTemps} = require('../../controllers/Temperament.controller.js');

const getDogs = async (req, res, next) => {
    const {name} = req.query;
    const dogs = await getAllDogs();
    try {
        if(name){
          let dogsByName = []
          dogs.map(d => {
            if(d.name.toLowerCase().includes((name.toLowerCase()))) {
              dogsByName.push({
                id: d.id,
                name: d.name,
                weight: d.weight,
                image:d.image,
                temperaments: d.temperaments,
              })
            };
          })
          
          dogsByName.length ? res.status(200).json(dogsByName) : res.json("Dog not found");
        }else{
          return res.json(dogs);
        }
    } catch (error) {
        next(error);
    }
  }

const getDogsById = async (req, res, next) => {
    const id = req.params.idRaza;
    const details = await getAllDetails();
    try {
        if(!id.includes("-")){
          const filterDetails = await details.filter(d => d.id == Number(id));
          filterDetails.length ? res.status(200).json(filterDetails) : res.status(404).json('Id not found');
        }else {
          let bdDetails = await Dog.findAll({
            where: {id},
            include: [{
              model: Temperament,
              attributes: ['name'],
              through: {
                attributes: []
              }
            }], 
          })
          bdDetails.length ? res.status(200).json(bdDetails) : res.status(404).json('Id not found');
        }
    } catch (error) {
        next(error);
    }
  }

const createDog = async (req, res, next) => {
    const {name, id, height, weight, life_span, image, temperaments} = req.body;
    //creo el perro sin el temperament ya que debo buscarlo en la bd
    try {
      const dogCreation = await Dog.create({
        name,
        id,
        height,
        weight,
        life_span,
        image,
    })
    //verifico que me mandaron un temp por body
    if(temperaments.length){
      const promises = temperaments.map(t => {
        dogCreation.addTemperament(t)
      })
      Promise.all(promises)
      let dog = await Dog.findOne({where: {name}})
    }
    return res.status(200).json("Dog created");
    } catch (error) {
        next(error);
    }
  }

const getAndCreateTemps = async (req, res, next) => {
    try {
        const allTemperaments = await getTemps();
        return res.status(200).json(allTemperaments);
    } catch (error) {
        next(error);
    }
}

const deleteDog = async(req, res, next) => {
  try {
      const id = req.params.idRaza;
      console.log(id)
      if(id){
        await Dog.destroy({
          where: {id}
        })
        return res.send("Dog deleted successfully")
      }
  } catch (error) {
      next(error);
  }
}

  module.exports = {
      getDogs,
      getDogsById,
      createDog,
      getAndCreateTemps,
      deleteDog,
  }