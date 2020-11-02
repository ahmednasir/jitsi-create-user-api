  const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// set body parser
app.use(bodyParser.json());

// set cors
app.use(cors())

app.get('/',(req,res)=>{
    res.send({
        "Status": 200,
        "Message": "Hellp"
    })
})

app.use('/create',require('./routes/create-user'));

// port
const port = 8083;

app.listen(port, () => console.log(`App listening on port ${port}!`));