const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true ,
        trim: true,                
        minlength: 3,             
        maxlength: 30              
    },
    email: {
        type: String,
        required: true,
        unique: true ,
        trim: true,               
        lowercase: true,          
        match: [                  
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
            'Please use a valid email address'
        ]
    },
    password: {
        type: String,
        required: true,
        select : false ,
        minlength: 8
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    firstName: {
        type: String,
        trim: true
      },
      lastName: {
        type: String,
        trim: true
      }
}, { timestamps: true });

// Virtual property
userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`.trim();
  });


const User = mongoose.model('User', userSchema);
module.exports = User;