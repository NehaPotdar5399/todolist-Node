
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection=require('./config/db')

require('dotenv').config();
const port =8000; 


const todoRoutes = require("./routes/Todo");

const app = express();


connection.once("open",()=>{
  console.log('connection established successfully');

})


app.use(cors());

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin',process.env.YOUR_DOMAIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
  
  next();
});

app.use("/api", todoRoutes);


app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
