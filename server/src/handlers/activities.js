const activitiesController = require("../controllers/activitiesController");

const activities = async (req,res)=>{
    const activity = await activitiesController();
    res.status(200).json(activity)
}

module.exports = activities;