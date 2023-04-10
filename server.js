//*******Partie 1 déclaration et initialisation */
const cors= require("cors")
var express = require("express")

 const {ER, SUC} = require("consola");
//var {success,error}=require("consola")
const port =3000
const app= express()
var DB = require('./config/database')

const RouteUser=require("./routes/userRoute")
// const routeOperation= require("./routes/operationRoute")
// const routeAccount = require("./Routes/accountRoute")
// const compteRoute = require("./routes/compteRoute")
// const todoRoute = require("./routes/todoRoute")


const RouteDose=require("./routes/userRoute")























const path = require('path')

var bodyParser = require('body-parser');
// //***********Parie de configuration**************** */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors({
  origin:"http://localhost:3000/",
  methods:["POST","PUT","DELETE","GET","PATCH"]
}))
//app.use("/user",RouteUser)
// app.use("/operation",routeOperation)
// app.use("/account",routeAccount)
// app.use("/compte",compteRoute)
// app.use("/todo",todoRoute)









app.use("/dose",RouteDose)


























app.use(express.static('public'));
app.use('/storages', express.static(path.join(__dirname, 'storages')));


//***********Parie de test*********** */
app.listen(port, async () => {
    // try {
    //   success({
    //     message: `sucess to connect to server via port:${port}`,
    //     badge: true,
    //   });  
    // } catch (ER) {
    //   error({
    //     message: "error",
    //     badge: true,
    //   });
    // }
    console.log(`sucess to connect to server via port:${port}`)
  });