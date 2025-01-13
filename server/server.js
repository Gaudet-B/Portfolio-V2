const cors = require('cors')
const express = require('express')
const cookieParser = require('cookie-parser')
const nodemailer = require('nodemailer')
const { createHandler } = require('graphql-http/lib/use/express')
const { buildSchema } = require('graphql')

const app = express()

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

const root = {
  hello: () => 'Hello World',
}

const handler = createHandler({ schema, rootValue: root })

app.use('/graphql', handler)

require('./config/mongoose.config')
require('dotenv').config()

app.use(express.json())
app.use(cookieParser())

// CRA App
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
// VITE App
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))

app.use(express.urlencoded({ extended: true }))

const appRoutes = require('./routes/app.routes')
appRoutes(app)

const port = process.env.PORT_ADDRESS
const userName = process.env.USER_SECRET_KEY
const passWord = process.env.PASS_SECRET_KEY

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: userName,
    pass: passWord,
  },
})

contactEmail.verify((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready to Send')
  }
})

app.listen(port, () => console.log(`Ready to rock on port ${port}`))
