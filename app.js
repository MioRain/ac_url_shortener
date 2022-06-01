import db from './config/mongoose.js'
import express from 'express'
import { engine } from 'express-handlebars'
import bodyParser from 'body-parser'
import getRandomAN from './public/javascripts/getRandomAN.js'
import Url from './models/url.js'

const app = express()
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/shorten', async (req, res) => {
  try {
    const { original_url } = req.body
    const url = {
      original_url,
      shortened_url: `http://${req.get('host')}/${getRandomAN(5)}`
    }
    const result = await Url.findOne({ original_url }).lean(res => res)
    result ? result : Url.create(url)
    res.render('index', { result, url })
  }
  catch (err) {
    console.log('catch', err)
  }
})

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})