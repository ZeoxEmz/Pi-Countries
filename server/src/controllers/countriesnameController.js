const {Country} = require("../db");
const { Op } = require('sequelize');

const countriesnameController = async (name) => {
    const country = await Country.findAll({ 
        where: { 
            name: {
                [Op.iLike]: `%${name.toLowerCase()}%`
            } 
        } 
    });
    
    if (country === null) return "No se ha encontrado ningún país con ese nombre";
    return country;
}

module.exports = countriesnameController;