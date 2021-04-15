import express from "express";
import patientsRouter from "./features/patients/patients.router";

var bodyParser = require('body-parser')

const app = express();

// app.use('/api', express.json())

// app.use(bodyParser.json())
app.use(function(req, res) {
req.headers['content-type'] = "application/json; charset=UTF-8"
})
// app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json())
app.use(patientsRouter)

app.post('/api/patient', function (req, res) {
    console.log(req.body)
    console.log(req.headers)
    // res.json(req.body)
  })



app.listen(4000, () => {
    console.log('Server started at http://localhost:4000')
})