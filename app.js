const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 8080
const app = express()
const bodyParser = require('body-parser');

const categoryRouter = require('./routes/category.routes');
const serviceRouter = require('./routes/service.routes');
const userRoutes = require('./routes/user.router');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes)
app.use(categoryRouter);
app.use(serviceRouter);


app.listen(port, (err)=>{
    if(err){
        console.log("Server Connection faild :", err)
    }
    else{
        console.log(`Server connected at ${port} ...`)
    }
})