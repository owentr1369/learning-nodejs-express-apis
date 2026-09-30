import express from 'express'
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 8080

// Mongoose Connection
mongoose.connect("mongodb://localhost/CRMdb")

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


routes(app)

app.get('/', (req, res) => {
    res.send(`Node and express server is running on port ${PORT}`)
})

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`))