const { default: mongoose } = require("mongoose");
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    photo:{
        type:String,
    },
    adresse:{
        type:String,
    },
    phone:{
        type:String,
    },
    role:{
        default:"user", type :String},

    dose: [{ type: Schema.Types.ObjectId, ref: "dose" }]

},
{ timestamps: true }
)
module.exports = mongoose.model("user",UserSchema)