const countriesController = require("../controllers/countriesController");
const countriesnameController = require("../controllers/countriesnameController");

const countries = async (req,res)=>{
    try {
        const {name,page,size} = req.query
        const response = name ? await countriesnameController(name) : await countriesController(page,size);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = countries;