const express = require('express');
const cors = require('cors');



class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }
    middlewares(){
        //CORS
        this.app.use(cors());
        //Body Parser
        this.app.use(express.json());

        //direcotio publico
        this.app.use(express.static('public'));
    }


    routes(){
        
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));
    }
    listen(){        
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}!`);
        });
    }
}
module.exports = Server;