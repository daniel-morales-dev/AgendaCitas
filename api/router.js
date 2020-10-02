const citas = require('./routes/rutasCitas');
const doctores = require('./routes/rutasDoctores');
const login = require('./routes/rutasLogin');
const horario = require('./routes/rutasHorario');
function rutas(app) {
    app.use('/api/doctores', doctores);
    app.use('/api/login', login);
    app.use('/api/citas', citas);
    app.use('/api/horario',horario)
}

module.exports = rutas;