const  mongoose  = require("mongoose");

const schema = mongoose.Schema({
    name:String,
    quantity:String,
    price:Number,
    image:String,
    itemNo:{
      type:Number,
      require:true,  
    } ,
    moreDetails:String

}, { versionKey: false });
module.exports = mongoose.model("Food",schema,"food");
