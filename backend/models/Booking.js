const {Schema, model} = require('mongoose');

const bookingSchema = new Schema({
  user:{type:Schema.Types.ObjectId, ref:'User'},
  expert:{type:Schema.Types.ObjectId, ref:'Expert'},
  datetime:Date,
  meetingLink:String,
  paid:{type:Boolean, default:false}
});

module.exports = model('Booking', bookingSchema);
