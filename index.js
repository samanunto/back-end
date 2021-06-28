const express = require('express');
const socket = require('socket.io')
//const path = require('path')
// crear el servidor
const app = express();
const cors = require('cors');
require('dotenv').config();

const { dbConnection } = require('./database/config');

const socketIo = require("socket.io");
const fileUpload = require('express-fileupload')

const Sockets  = require('./models/sockets');

// Base de datos
dbConnection();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

      // Fileupload - Carga de archivos
app.use( fileUpload({
        useTempFiles : true,
        tempFileDir : '/tmp/',
        createParentPath: true
    }));
//CORS
app.use(cors());




// Directorio publico
app.use(express.static('uploads'));

// lectura y parseo de body
// app.use(express.json());
// app.use(express.urlencoded());


// Fileupload - Carga de archivos

//Rutas
app.use('/api/auth', require('./routers/auth'));
app.use('/api/posts', require('./routers/posts'));
app.use('/api/user', require('./routers/users'));
app.use('/api/reaccion', require('./routers/reaccion'));
app.use('/api/tareas', require('./routers/tareas'));
app.use('/api/getPassword', require('./routers/getPassword'));
app.use('/api/cumpleaños', require('./routers/cumpleaños'));
app.use('/api/event', require('./routers/events'));
app.use('/api/filtros', require('./routers/filtros'));
app.use('/api/correo', require('./routers/correo'));
//app.use('/api/getPassword2', require('./routers/getPassword2'));


//escuchar peticiones
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo ${process.env.PORT}`);
})


// io =socket(server);
// io.on('connection', (socket)=>{
//     new Sockets(io );
   

// })

// Configuraciones de sockets
// io = socketio( server, { /* configuraciones */ } );
// configurarSockets = ()=> {
//     new Sockets( this.io );
// }
// configurarSockets();