const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json(), express.urlencoded({extended:true}));

//permite accesar desde un origen distinto
app.use(
    cors({
        //URL de React
        origin: "http://localhost:3000"
    })
)

//Inicializar la BD
require("./server/config/mongoose.config");

//Importar Rutas
const misRutas = require("./server/routes/team.routes");
misRutas(app);

//Ejecutamos el server
app.listen(8000, ()=>console.log("Servidor Listo!"));