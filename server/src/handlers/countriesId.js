const countriesidController = require("../controllers/countriesidController");

const countriesid = async (req,res)=>{
    const {id} = req.params;
    const response = await countriesidController(id);
    res.status(200).json(response);
}

module.exports = countriesid;