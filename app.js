import express from 'express'
import { engine } from 'express-handlebars'
import bodyParser from 'body-parser'
import db from './config/mongoose.js'
import routes from './routes/index.js'

const app = express()
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})