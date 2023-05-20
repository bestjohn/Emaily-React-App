const mongoose = require('mongoose');
const {Schema} = mongoose;//same as const Schema = mongoose.Schema

const userSchema = new Schema({
  googleId: String,
  credits: {type:Number,default:0}
});

mongoose.model('users',userSchema);//creates a new Collection/model class called 'users' using the previously defined Schema

