var express = require('express');
var mysql = require('mysql');



var db = mysql.createConnection({
    host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "z7gp2924qgyhu7ey",
    password: "base4ew1hih4havh",
    database: 'q6xed0lc9eeajlt8'
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

var app = express();

//if (process.env.NODE_ENV === "production") {
   // app.use(express.static("client/build"));
 // }


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


