var { default: mongoose } = require("mongoose");

const doseSchema = new mongoose.Schema({

    name:{
        type:String,
        required: [true, "Title required"],
    },
    valeur:{
        type:String,
       
    },
 seuil:{
    type:String,default:"20"
 }
 
    // user:{
    //     //unique:true,
    //     type:mongoose.Types.ObjectId,
    //     ref:"user"
    // },

},
{ timestamps: true }

)

module.exports = mongoose.model("dose",doseSchema)