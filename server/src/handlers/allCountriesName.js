const allCountriesNameController = require("../controllers/allCountriesNameController");

const allCountriesName = async (req,res)=>{
    try {
        const response = await allCountriesNameController();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = allCountriesName;