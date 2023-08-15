const {Activity,Country} = require("../db");

const createActivitiesController = async (name,difficulty,duration,season,countries)=>{
    try {
        const newActivity = await Activity.create({ name, difficulty, duration, season });
    
        if (countries && countries.length > 0) {
          const countriesBdd = await Country.findAll({ where: { name: countries } });
          console.log(countriesBdd)
    
          if (countriesBdd.length > 0) {
            await newActivity.setCountries(countriesBdd);
          } else {
            throw new Error("No se ha encontrado ningún país para asociar");
          }
        
        }
    
        return newActivity;
      } catch (error) {
        throw new Error("Error al crear actividad:" + error.message);
      }
}

module.exports = createActivitiesController;