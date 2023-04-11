const express = require('express');

const routedose = express.Router();
const doseController= require("../controllers/dosiMetrieController");


routedose.post("/createdose",doseController.Createdose);
routedose.get("/getListAlldose",doseController. GetAlldoses);
routedose.delete("/deletedose/:id",doseController.Deletedose);
routedose.get("/getdoseById/:id",doseController.GetdoseByID);
routedose.put("/updatedose/:id",doseController.Updatedose);

exports default routedose;