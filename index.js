require('dotenv').config();

const http = require('http');
const app = require('./app');


const server = http.createServer(app);


console.log(process.env.PORT);


server.listen(5432, () => {
    console.log(`Servidor corriendo en el puerto : ${5432}` );
})



module.exports = server