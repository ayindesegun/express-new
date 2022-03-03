const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  const num1 = Number(req.body.num1)
  const num2 = Number(req.body.num2)
  const result = num1 + num2
  res.send("The result of this calculation is " + result)
})

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html')
})
app.post('/bmicalculator', (req, res) => {
  const weight = Number(req.body.weight)
  const height = Number(req.body.height)
  const result = weight / (height * height)
  res.send('The result of your BMI is ' + result)
})


app.listen(3000, () => {
  console.log("Hannah has a big head!!!!!!!!")
})