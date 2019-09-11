const express = require('express')
const stripe = require('stripe')('sk_test_jw7DhTqnzeLPwKAWuwAi0nL100TROKsqsF')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express()

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// BodyParser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(`${__dirname}/public`))

// Root route
app.get('/', (req, res) => {
  res.render('index')
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`*** Server started on port ${port} ***`)
})