import Server from './classes/server';

const server = new Server();

server.start( () => console.log(`server iniciado en el puerto: ${ server.port }`))