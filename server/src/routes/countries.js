const { Router } = require("express");
const countries = require("../handlers/countries");
const countriesid = require("../handlers/countriesId");
const allCountriesName = require("../handlers/allCountriesName");
const countriesRouter = Router();

countriesRouter.get("/",countries);
countriesRouter.get("/name",allCountriesName);
countriesRouter.get("/:id",countriesid);

module.exports = countriesRouter;