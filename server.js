var express = require('express');
var mysql = require('mysql');

var db = mysql.createConnection({
    host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'q6xed0lc9eeajlt8'
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

var app = express();

app.use(express.static('static'))

app.use(express.json());






app.post('/SignUp', (req, res) => {

    var sql = `INSERT INTO JLUSA_Users SET ?`;
    var pst=req.body

    var query = db.query(sql,pst, (err, result) => {
        if(err) throw err
        res.send({Status:"Done"})


    });

});


const PORT = process.env.PORT || "80"

app.listen(PORT, () => {
    console.log('Server started on port '+PORT);
});


