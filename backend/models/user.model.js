const mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password:{
    type:String,
    required: true,
    trim:true
  },
  emiladress:{
    type:String,
    lowercase: true,
    trim:true,
    unique: true,
    required: true
  },
  isclient:{
    type:Boolean
  },
  points:{
    type:Number
  }
}, {
  timestamps: true,
});
userSchema.methods.getpass= async function(){

  return this.password
}



userSchema.methods.comparePassword = async function(enterPassword){
  return await bcrypt.compare(enterPassword, this.password);
}


userSchema.pre('save', async function(next) {
    try {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(this.password, salt)
      this.password = hashedPassword
      next()
    } catch (error) {
      next(error)
    }
})





module.exports = mongoose.model('User', userSchema);
