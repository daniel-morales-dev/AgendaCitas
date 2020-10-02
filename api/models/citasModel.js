const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const citasSchema = new Schema({
    fecha:{
        type:String,
        required:true
    },
    hora: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});
module.exports = mongoose.model('citas', citasSchema);