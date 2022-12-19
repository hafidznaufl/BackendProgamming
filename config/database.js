const mysql = require('mysql');

require('dotenv').config()

//Destructing object process .env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env


const db = mysql.createConnection({
    host : DB_HOST,
    user : DB_USERNAME,
    password : DB_PASSWORD,
    database : DB_DATABASE
})

db.connect((err) => {
    if (err) {
        console.log('Error Connecting' + err.stack);
        return
    } else {
        console.log('Connection Success');
        return
    }
})

module.exports = db