const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port:3305,
  user: 'root',
  password: 'root123',
  database: 'froker',
  multipleStatements: true,
  
  
  
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ' + err.stack);
      return;
    }
    console.log('Connected to database as ID ' + connection.threadId);
  });


module.exports= connection;
  