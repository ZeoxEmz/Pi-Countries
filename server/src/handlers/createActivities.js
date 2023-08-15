const createActivitiesController = require("../controllers/createActivitiesController");

const createActivities = async (req,res)=>{
    try {
        const {name,difficulty,duration,season,countries} = req.body
        const newActivitie = await createActivitiesController(name,difficulty,duration,season,countries)
        res.status(200).json(newActivitie);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = createActivities;