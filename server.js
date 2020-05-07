var mysql = require('mysql');
var fs = require('fs')

var connection = mysql.createConnection({
  host     : "aa18hthcaue5zg.cbzmg30jppts.us-east-2.rds.amazonaws.com",
  user     : "username",
  password : "password",
  port     : 3306
});

var user = {
  email: 'someone@gmail.com',
  FName: 'Lin',
  LName: 'L',
  companyname: 'Nike',
  role: 'student'
}

function createUser(user) {
  connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }

    connection.query(fs.readFileSync('./sql/createUser.sql').toString(), [user.email, user.FName, user.LName, user.companyName, user.role], (err, rows) => {
      if (err) throw err;
      console.log('Data received from Db:');
      console.log(rows);
    })
    console.log('Connected to database.');
  });
}

// createUser(user)
// connection.end();