const Usuario = require('../models/Usuarios');
// const Mensaje = require('../models/mensaje');

const usuarioConectado = async( uid ) => {
    console.log('llego aqi')
    const usuario = await Usuario.findById(uid);

    // usuario.online = true;
    await Usuario.findByIdAndUpdate(uid, {$set:{online:true}}, {new: true});
    // await usuario.save();
    
    return usuario;
}

const usuarioDesconectado = async( uid ) => {
    console.log('llego aqi')
    const usuario = await Usuario.findById(uid);

    // usuario.online = true;
    await Usuario.findByIdAndUpdate(uid, {$set:{online:false}}, {new: true});
    // await usuario.save();
    
    return usuario;
}

const getNotificacion = async()=>{

}

// const getUsuarios = async() => {

//     const usuarios = await Usuario
//         .find()
//         .sort('-online');

//     return usuarios;
// }

// const grabarMensaje = async( payload ) => {
    
//     try {
        
//         const mensaje = new Mensaje( payload );
//         await mensaje.save();

//         return mensaje;

//     } catch (error) {
//         console.log(error);
//         return false;
//     }

// }


module.exports = {
    usuarioConectado,
    usuarioDesconectado,
    // getUsuarios,
    // grabarMensaje
}
