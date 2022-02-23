const {Client} = require('pg');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const client= new Client({
  host:"localhost",
  port:5432,
  user:"postgres",
  password:"Gudi@12345",
  database:"calc"
}

)

app.use(bodyParser.urlencoded({extended: true}));
/*app.get("/" , (req , res)=>{
  res.sendFile(__dirname+"/index.html");
})*/

app.set("view engine","ejs");
app.get("/" , (req , res)=>{
  res.render("index");
});
app.get("/users/fetch" , (req , res)=>{
  client.connect();
client.query('select * from calculator',(err,result)=>{
    if(!err){
      res.render("fetch",{'item':result.rows});
    }else{
        console.log(err.message);
    }client.end;
}

)
});
/*client.connect();
client.query('select * from calculator',(err,res)=>{
    if(!err){
console.log(res.rows);
    }else{
        console.log(err.message);
    }client.end;
}

)*/

app.post("/",(req, res) =>{

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var operator =req.body.submit;

  function calculate(num1, num2) {
    var result = 0;
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    if (req.body.submit == '+') {
        const result = n1 + n2;
        res.send(' ' + result);

        client.connect(function (err) {
            var pg = "insert into calculator(num1, num2,operator,result,time) values('" + req.body.num1 + "', '" + req.body.num2 + "','" + req.body.submit + "','" + result + "',current_timestamp)";
            client.query(pg, function (err) {
                // console.log(req.body.no1);
                // console.log(req.body.no2);
                // console.log(req.body.operator);
                console.log(">Inserted!");
                //client.end();
        })
          })
    }
    else if (req.body.submit == '-') {
        const result = n1 - n2;
        res.send(' ' + result);
        client.connect(function (err) {
            var pg = "insert into calculator(num1, num2,operator,result,time) values('" + req.body.num1 + "', '" + req.body.num2 + "','" + req.body.submit + "','" + result + "',current_timestamp)";
            client.query(pg, function (err) {
                // console.log(req.body.no1);
                // console.log(req.body.no2);
                // console.log(req.body.operator);
                console.log(">Inserted!");
                //client.end();
        })
          })
    }
    else if (req.body.submit == '*') {
        const result = n1 * n2;
        res.send(' ' + result);
        client.connect(function (err) {
            var pg = "insert into calculator(num1, num2,operator,result,time) values('" + req.body.num1 + "', '" + req.body.num2 + "','" + req.body.submit + "','" + result + "',current_timestamp)";
            client.query(pg, function (err) {
                // console.log(req.body.no1);
                // console.log(req.body.no2);
                // console.log(req.body.operator);
                console.log(">Inserted!");
                //client.end();
        })
          })
    }
    else if (req.body.submit == '/') {
        const result = n1 / n2;
        res.send(' ' + result);
        client.connect(function (err) {
            var pg = "insert into calculator(num1, num2,operator,result,time) values('" + req.body.num1 + "', '" + req.body.num2 + "','" + req.body.submit + "','" + result + "',current_timestamp)";
            client.query(pg, function (err) {
                // console.log(req.body.no1);
                // console.log(req.body.no2);
                // console.log(req.body.operator);
                console.log(">Inserted!");
                //client.end();
        })
          })
    }
    else if (req.body.submit == '%') {
        const result = n1 % n2;
        res.send(' ' + result);
        client.connect(function (err) {
            var pg = "insert into calculator(num1, num2,operator,result,time) values('" + req.body.num1 + "', '" + req.body.num2 + "','" + req.body.submit + "','" + result + "',current_timestamp)";
            client.query(pg, function (err) {
                // console.log(req.body.no1);
                // console.log(req.body.no2);
                // console.log(req.body.operator);
                console.log(">Inserted!");
                //client.end();
        })
          })
    }
    else {
        res.send('error');
    }
  }

    calculate(num1, num2, operator);
})



app.listen(4006, (res) =>{
    console.log('Server is on port 4006')
})