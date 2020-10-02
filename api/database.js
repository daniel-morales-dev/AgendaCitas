const mongoose = require('mongoose'); //Libreria de JS que me permite unir Node con MongoDb y crear los esquemas

const URI = 'mongodb://localhost:27017/citasmedicas'; //Ruta de conexion a la BD
mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log('DataBase Connect Succesfull'))
    .catch((err) => console.log(err + ' Error en la conexion a la BD'));

module.exports = mongoose;