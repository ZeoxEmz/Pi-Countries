const axios = require("axios");
const {Country} = require("../db");
const detailCleaner = require("../utils/detailCleaner");

const saveDataApiController = async ()=>{
    const {data} = await axios.get("http://localhost:5000/countries");
    const countries = detailCleaner(data);
   
    const insertedCountries = await Country.bulkCreate(countries,{ignoreDuplicates: true });
    return insertedCountries;
}

module.exports = saveDataApiController;