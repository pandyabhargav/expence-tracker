const express = require('express')
const bodyparser = require('body-parser');
const path = require('path');
const router = require('./Routers/routes');
require('./Config/mongo')


const app = express();
const port = 3000;


app.set('view engine',"ejs")
app.set(path.join(__dirname,"view"))


app.use(express.static(path.join(__dirname,"view")))
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


app.use('/',router);


app.listen(port ,(err)=>{
    if(!err){
        console.log(`Server running at http://localhost:${port}`);
    }
})