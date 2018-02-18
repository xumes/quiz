import mongoose from 'mongoose'
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

export default mongoose.model('User', User)