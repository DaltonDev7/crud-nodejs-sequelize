require('dotenv').config();

const http = require('http');
const app = require('./app');
const model = require('./models')


const server = http.createServer(app);


console.log(process.env.PORT);


model.sequelize.sync().then((xx)=>{
    server.listen(process.env.PORT, () => {
        console.log(`Servidor corriendo en el puerto : ${process.env.PORT}` );
    })
    
})





module.exports = server