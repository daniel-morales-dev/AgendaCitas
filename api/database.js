const mongoose = require('mongoose'); //Libreria de JS que me permite unir Node con MongoDb y crear los esquemas

const URI = 'mongodb+srv://admin:cecep2020@cluster0.nbres.mongodb.net/citasmedicas?retryWrites=true&w=majority'; //Ruta de conexion a la BD
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