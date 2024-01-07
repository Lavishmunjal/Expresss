const express = require('express')
const app = express()
const port = 3000
// Middleware to parse incoming JSON requests
app.use(express.json());

app.get('/', function(req, res){
  res.send('Hello World!')
})
app.post('/converstaion', (req, res)=> {
    console.log(req.headers["authorization"])
    console.log(req.body)
    res.send({
        msg : "2+2 = 4"
    })
})

// create a simple http server in c from sctatch
// create a todo application where u store data in a file
// create a rust/ golang / java http server

app.listen(port)