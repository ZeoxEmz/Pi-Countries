const {Activity} = require("../db");

const activitiesController = async ()=>{
    const activity = await Activity.findAll();
    return activity;
}

module.exports = activitiesController;