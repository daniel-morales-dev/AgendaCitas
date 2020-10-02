const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const doctorSchema = new Schema({
    cedula: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});
module.exports = mongoose.model('doctores', doctorSchema);