const express = require('express')
const path=require('path')
const app = express()

app.get('/index.html', (req, res) => {
  // res.send('index')
  res.sendFile(path.join(__dirname,'/index.html'))
  res.status(500)
})
app.get('/about.html', (req, res) => {
  // res.send('index')
  res.sendFile(path.join(__dirname,'/about.html'))
  res.status(500)
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})