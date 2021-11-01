const express = require("express");
//var bp = require('body-parser')

const router=express.Router();
const app= new express();
var nodemailer = require('nodemailer');

//app.use(bp.json());
//app.use(bp.urlencoded({extended:true}));
app.use(express.urlencoded({extended: true}));
const greetingsdata=require('./src/model/greetingsdata');
const mailRoute=require('./src/routes/mailRoute');
const greetingsroute= require('./src/routes/greetingsroute')
const port= process.env.PORT || 5015;


app.use('/public', express.static('public'));
app.set ("view engine","ejs");
app.set("views", "./src/views");
//app.use("/", router);
app.use("/mail", mailRoute);
app.use("/greetings",greetingsroute);





app.get('/',function(req,res){
    res.render('index');
})

app.listen(port,()=>{console.log("Server ready at port" +port)});