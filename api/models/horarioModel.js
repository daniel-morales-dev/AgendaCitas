const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const horarioSchema = new Schema({
    hora: {
        type: String,
    },
});
module.exports = mongoose.model('horarios', horarioSchema);