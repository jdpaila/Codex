const {Schema, model} = require('mongoose');

const expertSchema = new Schema({
  user:{type:Schema.Types.ObjectId, ref:'User'},
  bio:String,
  photo:String,
  languages:[String],
  price:Number,
  rating:{type:Number, default:0},
  approved:{type:Boolean, default:false}
});

module.exports = model('Expert', expertSchema);
