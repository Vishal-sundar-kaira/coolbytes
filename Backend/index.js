const connectToMongo=require('./db')
const express = require('express')
connectToMongo();
const { spawn } = require('child_process');
var cors = require('cors');
const { findDOMNode } = require('react-dom');
const app = express()
const port = 5000
app.use(cors())
app.use(express.json());//middleware is necessary for link respose to perform  json or you need to add url
//Available routes

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/retail',require('./routes/retail'))
app.get('/data', (req, res) => {
  var data1;
 // spawn new child process to call the python script

 
 const python = spawn('python', ['./food_data_csi.py']);
 // collect data from script
 python.stdout.on('data', (data)=> {
    data1 = data.toString();
    console.log(data1)
    // res.json(data1)
    // console.log(data1)
    // res.json({message:data1})
 });
//  res.json({data1 });
 
 // in close event we are sure that stream from child process is closed
 python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    res.json(data1)
    // send data to browser
   //  res.send(data1)
 });
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})