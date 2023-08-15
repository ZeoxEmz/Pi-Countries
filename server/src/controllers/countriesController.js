const {Country,Activity} = require("../db");

const countriesController = async (page=1,pageSize=10)=>{
    const offset = (page - 1) * (+pageSize);
    const {count,rows} = await Country.findAndCountAll({include:[{model:Activity,through:{attributes:[]}}],offset,limit:pageSize});
    /* const countries = await Country.findAll({include:[{model:Activity,through:{attributes:[]}}]});
    return countries; */
    return count,rows
}

module.exports = countriesController;