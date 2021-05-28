const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('./bootstrap/dist/')
})

app.get('/micro-frontend-project/welcome', (req, res) => {
  res.send('./welcome/dist/')
})

app.get('/micro-frontend-project/music/', (req, res) => {
  res.send('./music/build/')
})

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));