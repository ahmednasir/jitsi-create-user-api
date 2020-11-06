  const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config()

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

app.get('/rate',(req, res)=>{
  res.sendFile('/home/ubuntu/jitsi-create-user-api/public/rate.html');
})
// port
const port = 8083;

app.listen(port, () => console.log(`App listening on port ${port}!`));

