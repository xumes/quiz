import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
require('mongoose-type-email')

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: true
    }
})

User.methods.hasPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validate = function(password, cb) {
    return bcrypt.compare(password, this.password, cb)
}

export default mongoose.model('User', User)