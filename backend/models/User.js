const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  name:String,
  email:{type:String, unique:true},
  password:String,
  role:{type:String, enum:['user','expert','admin'], default:'user'}
});

module.exports = model('User', userSchema);
