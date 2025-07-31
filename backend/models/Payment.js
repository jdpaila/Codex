const {Schema, model} = require('mongoose');

const paymentSchema = new Schema({
  booking:{type:Schema.Types.ObjectId, ref:'Booking'},
  amount:Number,
  status:String,
  transactionId:String
});

module.exports = model('Payment', paymentSchema);
