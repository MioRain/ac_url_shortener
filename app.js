import db from './config/mongoose.js'
import express from 'express'
import { engine } from 'express-handlebars'

const app = express()
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})