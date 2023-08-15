const {Country,Activity} = require("../db");
const detailCleaner = require("../utils/detailCleaner");
//1 devolver el pais que me piden por id ✔
//2 filtrarlo para que me devulva solo lo que me piden en la detail page  ✔
//3 mostrar datos de las actividades de ese pais ❌ ✔

const countriesidController = async (id)=>{
    const country = await Country.findOne({ 
        where: { id },
        include:[
            {
                model:Activity,
                attributes:["id","name","difficulty","duration","season"],
                through: { attributes: [] }
            }
        ]});
    return country
}

module.exports = countriesidController;