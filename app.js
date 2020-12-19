const http =  require('http');
const handler = require('./routes');

const server = http.createServer(handler.handler);

server.listen('3000',()=>{
    console.log('Server is listening to 3000');
});