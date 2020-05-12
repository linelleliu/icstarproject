const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.listen(8080)

const connection = mysql.createConnection({
    host: "aa18hthcaue5zg.cbzmg30jppts.us-east-2.rds.amazonaws.com",
    user: "username",
    password: "password",
    port: 3306
})

connection.connect(err=> {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.hurry');
    app.post('/getuser',(req,res)=>{
        console.log(req.body)

        connection.query(fs.readFileSync('./sql/getUserdata.sql').toString(),[req.body.username,req.body.password],(err,resp)=>{         
            if(err)
            {
            res.json(err)
            }
            console.log(resp[0])
            if(req.body.password===resp[0].password){
            res.json('correct password')
            } else {
            res.json('not')
            }
            
        })
    })
});
