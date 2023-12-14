const mysql = require("mysql2");
connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"article",
    password:""
}).promise();
connection.connect(function(err){
    if (err){
        return console.error("Ошибка: "+err.message);
    }
    else{
        return console.error("Подключение к серверу MySQL успешно установлено");
    }
});
module.exports=connection;