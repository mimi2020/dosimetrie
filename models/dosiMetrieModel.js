const { default: mongoose } = require("mongoose");

const doseSchema = new mongoose.Schema({

    name:{
        type:String,
        required: [true, "Title required"],
    },
    valeur:{
        type:String,
       
    },
 
 
    // user:{
    //     //unique:true,
    //     type:mongoose.Types.ObjectId,
    //     ref:"user"
    // },

},
{ timestamps: true }

)

module.exports = mongoose.model("dose",doseSchema)