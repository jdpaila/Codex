const {Schema, model} = require('mongoose');

const reviewSchema = new Schema({
  user:{type:Schema.Types.ObjectId, ref:'User'},
  expert:{type:Schema.Types.ObjectId, ref:'Expert'},
  rating:Number,
  comment:String
});

module.exports = model('Review', reviewSchema);
