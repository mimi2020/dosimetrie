const doseModel = require("../models/dosiMetrieModel");

module.exports={

    Createdose :async function(req, res){
        console.log(req.body);
        const newdose = {
        name: req.body.name,
        valeur: req.body.valeur,
       
     
      };
       
   
   const newOBJ= doseModel.create(newdose)
    .then((res) => {
     res.send({ status: 200,data:newdose })
 
    })
    .catch((err) => {
      res.send({ status: 500, data: newdose })
    })

},




     GetAlldoses : async function (req, res){
   
    doseModel.find()
    .then(function (models) {
      console.log("***models***",models);
      res.json({status:200,data:models})
    })
    .catch(function (err) {
      console.log("*****LIST*********",err);
      res.json({status:500})
    });



},


        Deletedose: function (req, res) {
          doseModel.deleteOne({_id:req.params.id},req.body)
          .then(function (models) {
            console.log("***models***",models);
            res.json({status:200,data:models})
          })
          .catch(function (err) {
            console.log("*****LIST*********",err);
            res.json({status:500})
          });
          },
       
       
          GetdoseByID: function (req, res) {
            doseModel.findOne({_id:req.params.id})
            .then(function (models) {
              console.log("***models***",models);
              res.json({status:200,data:models})
            })
            .catch(function (err) {
              console.log("*****LIST*********",err);
              res.json({status:500})
            });
       
           
          },  
       
          Updatedose: function (req, res) {
            doseModel.updateOne({_id:req.params.id},req.body)
            .then(function (models) {
              console.log("***models***",models);
              res.json({status:200,data:models})
            })
            .catch(function (err) {
              console.log("*****LIST*********",err);
              res.json({status:500})
            });
       
          },




        }

        // app.post("/register", function(req, res){
        //     const newUser = new User({
        //         email: req.body.email,
        //         password: req.body.password
        //     });
       
        //     newUser.save().then(()=>{
        //         res.render("secrets");
        //     }).catch((err)=>{
        //         console.log(err);
        //     })
        // });


        // app.post("/login",function(req,res){
        //     const username = req.body.username;
        //     const password = req.body.password;
       
        //     User.findOne({email:username})
        //     .then((foundUser) => {
        //         if(foundUser){
        //             if(foundUser.password === password){
        //                 res.render("secrets");
        //             }
        //         }
        //    })
        //    .catch((error) => {
        //        //When there are errors We handle them here
       
        // console.log(err);
        //        res.send(400, "Bad Request");
        //    });
             
        // });