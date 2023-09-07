const mongoose = require("mongoose");

const EsquemaTeam = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio."],
        minlength: [2, "Name must be at least 2 characters in length."]
        //estas son validaciones el nuevo tema
    },
    position: {
        type: String
    },
}, {timestamps: true, versionKey: false});
//timestamps: me crea campos de createAt y updateAt
//versionKey: false me elimina el atributo __v

const Team = mongoose.model("teams", EsquemaTeam);

module.exports = Team;