  const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config()
var expressLayouts = require("express-ejs-layouts");

// set view engine
app.set("view engine", "ejs");
// app.use(expressLayouts);

// set body parser
app.use(bodyParser.json());

// set cors
app.use(cors())

// dbs
require('./services/db');

require('./services/db').connection



app.get('/',(req,res)=>{
    res.send({
        "Status": 200,
        "Message": "Hello"
    })
})

app.use('/user',require('./routes/user'));

app.use('/terminate', require('./routes/terminateUser'))

app.use('/rate',(req, res)=>{
  res.render('rate')
})



// port
const port = 8083;

app.listen(port, () => console.log(`App listening on port ${port}!`));

