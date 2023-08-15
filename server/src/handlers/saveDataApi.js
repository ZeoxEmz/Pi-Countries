const saveDataApiController = require("../controllers/saveDataApiController");

const saveDataApi = async (req,res)=>{
    const response = await saveDataApiController();
    res.status(200).json(response);
}

module.exports = saveDataApi;