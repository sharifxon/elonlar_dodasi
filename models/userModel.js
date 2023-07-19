const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        required: true,
        trim: true,
        //Sayidsharifxon Omonov
    },
    phone: {
        type: Number,
        required: true,

    },
    password: {
        type: String,
        required: true,
        minLength:6
    },
    posters:[{type: Schema.Types.ObjectId, ref:'Poster'}]
},
{
    timestamps: true,
})

module.exports = model('User', userSchema)