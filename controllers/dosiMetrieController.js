const doseModel =  require("../models/dosiMetrieModel")
const { success, error } = require("consola")
module.exports={

    Createdose :async function(request, result){
        console.log(request.body);
        // const newdose = {
        // name: req.body.name,
        // valeur: req.body.valeur,
    
        //  };
       
   
//    const newOBJ= doseModel.create(newdose)
//     .then((res) => {
//      res.send({ status: 200,data:newdose })
 
//     })
//     .catch((err) => {
//       res.send({ status: 500, data: newdose })
//     })
// const newdose = {
//     ...request.body,
// };
// console.log(request.body)
// await doseModel.create(newdose, (error, dose) => {
//     try {
//         result.status(200).json({
//             message: "dose is created",
//             status: 200,
//             data: dose,
//         });
//     } catch (error) {
//         result.status(500).json({
//             message: error,
//             status: 500,
//         });
//     }
// })
const dd = new doseModel(request.body)
    dd.save(request.body, (err, item) => {
      if (err) {
        result.status(406).json({ message: "failed to create dose" + err })
      }
      else {
        result.status(200).json({ message: "dose created successuffly", data: item })
      }
    })
},


}