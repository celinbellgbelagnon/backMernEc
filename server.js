const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express();
/* const database = require('./Config/ConfigMysql') */
const itemroute = require('./routes/itemRoute')

//Convertir les requetes pour les exploiter
app.use(express.json());
app.use(cors());
app.use('/item', itemroute)


app.listen(5000,()=>{
    console.log('Our server is runing on port 5000');
})
