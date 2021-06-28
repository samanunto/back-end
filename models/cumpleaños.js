const {Schema, model} = require('mongoose');

const CunmpleañosSchema = Schema({


    fecha:{
        type: Date,
        default: Date.now
    },

    felitador:[{
        type: Schema.Types.ObjectId, 
        default: [],
        ref: 'Usuario',
    }],
    felitado:[{
        type: Schema.Types.ObjectId, 
        default: [],
        ref: 'Usuario',
    }],

});

NotificacionSchema.method('toJSON', function(){
    const {__v, _id, ...Object} = this.toObject();
    Object.id = _id;
    return Object;
})


module.exports = model('Cunmpleaños', CunmpleañosSchema);
