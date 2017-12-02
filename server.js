const express = require('express')
const app = new express()
const port = 3000 || Process.env.port
const firebase = require('./firebase')

app.use((req, res, next) => {
  console.log(firebase.database)
})

app.get('/', (req, res) => {
  res.status(200).send({response : 'yes'})
})

app.get('/data', (req, res) => {
  res.status(200).send({response : 'salads'})
})

app.listen(port, (err) => {
  if(err) return console.log(`a error happened : ${err}`)
  console.log(`server run on port ${port}`)
})

