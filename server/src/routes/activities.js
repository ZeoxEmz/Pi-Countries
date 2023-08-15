const { Router } = require("express");
const createActivities = require("../handlers/createActivities");
const activities = require("../handlers/activities");
const activitiesRouter = Router();

activitiesRouter.get("/",activities);
activitiesRouter.post("/",createActivities);

module.exports = activitiesRouter;