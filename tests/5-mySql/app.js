var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'zubiri',
   database: 'node',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

var query = connection.query('SELECT nombre FROM una', function(error,rows, result){
      if(error){
         throw error;
      }else{
         console.log('El nombre es: ',rows[0].nombre);
      }
   }
);
connection.end();
