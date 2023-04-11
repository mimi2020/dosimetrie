const UserModel =require("../models/userModel")
const {error,sucess }=require('consola');
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
    
    
    }
    







}