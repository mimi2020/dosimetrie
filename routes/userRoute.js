const express = require('express');
const UserRoute = express.Router();
const userControlers = require("../controlers/userControlers");

UserRoute.post("/createUser",userControlers.CreateUser)
UserRoute.get("/afficheUser",userControlers.GetUser)
UserRoute.get("/afficheUserById/:id",userControlers.GetUserById)
UserRoute.put("/put/:id",userControlers.UpdateUser)
UserRoute.delete("/delete/:id",userControlers.deletefunction)

module.exports = UserRoute