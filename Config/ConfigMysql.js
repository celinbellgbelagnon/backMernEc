const mysql = require('mysql2')

let database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ecommerce_mern_stark',
    password: ''
})

database.connect((error)=>{
    if (error) throw error  
    console.log('Database connect succeffuly')
})

module.exports = database