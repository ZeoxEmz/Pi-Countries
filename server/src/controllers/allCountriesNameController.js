const {Country} = require("../db");

const allCountriesNameController = async ()=>{
    const countriesName = await Country.findAll();
    const allcountriesName = countriesName.map((country)=>{
        return country.name
    })
    return allcountriesName.sort()
}

module.exports = allCountriesNameController;