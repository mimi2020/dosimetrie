//partie declaration
const port =3000;
var express =require("express")
const app =express()
const {error,success } =require('consola');
const DB=require("./config/database")

const RouteDose=require("./routes/dosimetrieRouters")
const RouteUser=require("./routes/userRouters")
var bodyParser = require('body-parser');

//partie configuration 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use("/dose",RouteDose)
app.use("/user",RouteUser)




//partie test
app.listen(port,async () =>{
    try {
        success({
            message:`sucess to connect to server via port:${port}`,
            badge:true,
        });
    }catch (error){
        error({
            message:"error",
            badge:true,
        });
    }
});