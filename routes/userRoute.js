var express = require('express');
const UserRoute = express.Router();
const userControlers = require("../controllers/userController");
const auth = require("../middlewares/auth")

UserRoute.post("/createUser",userControlers.CreateUser)
UserRoute.get("/afficheUser",userControlers.GetUser)
UserRoute.get("/afficheUserById/:id",userControlers.GetUserById)
UserRoute.put("/put/:id",userControlers.UpdateUser)
UserRoute.delete("/delete/:id",userControlers.deletefunction)
UserRoute.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });

module.exports = UserRoute