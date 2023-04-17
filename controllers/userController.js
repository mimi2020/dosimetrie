const UserModel =require("../models/userModel")
const {error,sucess }=require('consola');
const jwt = require("jsonwebtoken");
require('dotenv').config()
const nodemailer = require("nodemailer");
const SECRET = process.env.SECRET
var transporter=nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f720852db82555",
      pass: "b2015e100f75e4"
    }
    
  });
module.exports={

    
    CreateUser :async function(request, res){
        console.log(request.body);
        const data={name:request.body.name, 
            email:request.body.email,
            password:request.body.password,
            photo:request.body.phone,
            adresse:request.body.adresse,
            phone:request.body.phone,
            role:request.body.role,
            dose:request.body.dose,
        }
        var myData = new UserModel(data);
        console.log(myData);
        myData.save(function(err,result){
         if (err){
             console.log(err);
         }
         else{
             console.log("**********",result)
         }
     })
    
    },

    GetUser:async function(request,result){
       
        UserModel.find({}) 
        .exec((err, Listusers) => {
            if (err) {
                result.status(500).json({
                    message: "echec d'avoir la liste des utilisateurs",
                    status: 500,
                });
            } else {
                result.status(200).json({
                    message: "la listes des utilisateurs",
                    status: 200,
                    data: Listusers
                });
            }
        })
    
    
    },

    GetUserById:async function(request,result){
        
        UserModel.findById({_id:request.params.id}) 
        .exec((err, Listusers) => {
            if (err) {
                result.status(500).json({
                    message: "echec d'avoir  l'utilisateur by Id",
                    status: 500,
                });
            } else {
                result.status(200).json({
                    message: "user by Id",
                    status: 200,
                    data: Listusers
                });
            }
        })
    
    
    },

    UpdateUser:async function(request,result){
        
        UserModel.updateOne({_id:request.params.id},request.body) 
        .exec((err, Listusers) => {
            if (err) {
                result.status(500).json({
                    message: "echec d'avoir la mise a jour",
                    status: 500,
                });
            } else {
                result.status(200).json({
                    message: "mise a jour effectué avec succes",
                    status: 200,
                    data: Listusers
                });
            }
        })
    
    
    },
    deletefunction:async function(request,result){

        UserModel.deleteOne({_id:request.params.id}) 
        .exec((err, Listusers) => {
            if (err) {
                result.status(500).json({
                    message: "echec de supprimer l'utilisateur'",
                    status: 500,
                });
            } else {
                result.status(200).json({
                    message: "utilisateur supprimée",
                    status: 200,
                    
                });
            }
        })
    
    
    },

    Login: async function (req, res) {
        try {
          // 1 ere etape verifier email et compare password
          const { email, password } = req.body;
          const user = await UserModel.findOne({ email,password });
          if (!user) {
            return res
              .status(404)
              .json({ status: 404, message: "user is not found !" });
          }
          // 2 eme etape creation de token
          const token = jwt.sign(
            {
              id: user._id,
              user: user,
            },
            SECRET,
            { expiresIn: "7 days" }
          );
          const result = {
            email: user.email,
            user: user,
            token: token,
            expiresIn: 7,
          };
          return res.cookie("access_token", token, { maxAge: 3600 * 1000, httpOnly: true, sameSite: true }).status(200).json({
            ...result,
            message: token,
            success: true,
          });
        } catch (error) {
          res.status(404).json({ status: 404, message: error.message });
        }
      },
      EmailSend:async function(req,res){
        const data=req.body
       try {
         await  transporter.sendMail(
           {
             to: data.email,
             subject: "Welcome" + " " +data.name,
             text: "bonjour mr",
             html: `<!DOCTYPE html>
             <html>
             <head>
             <meta charset="utf-8">
             <meta http-equiv="x-ua-compatible" content="ie=edge">
             <title>Welcome Email</title>
             </head>
             <body>
             <h2> Hello ${data.name} ! </h2>
             <p> We want to send you an email at: ${data.email}</p>
             <p>Please be noted that ${data.txt} </p>
             <br>
             </body>
             </html>`,
           },
           function (err, info) {
             if (err) {
               console.log("error : ", err);
             } else {
               res.status(200).json({ status: 200, message: info });
               
             }
           }
         );
     
       } catch (error) {
         res.status(406).json({ status: 406, message: error.message });
       }
       }






}