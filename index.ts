import Server from './classes/server';
import router from './routes/router';
import express from 'express';
import cors from 'cors';

const server = new Server();

//body parser

server.app.use(express.urlencoded({extended:true}));
server.app.use(express.json());

//Configurando el CORS
server.app.use(cors({origin:true, credentials:true}));


//rutas de servicios
server.app.use('/', router);

server.start( () => console.log(`server iniciado en el puerto: ${ server.port }`))