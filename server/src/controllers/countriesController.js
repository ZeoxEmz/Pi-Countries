const {Country,Activity} = require("../db");

const countriesController = async ()=>{
    const countries = await Country.findAll({include:[{model:Activity,through:{attributes:[]}}]});
    return countries;
}

module.exports = countriesController;