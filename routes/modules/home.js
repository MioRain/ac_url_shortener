import express from 'express'
import Url from '../../models/url.js'
import getRandomAN from '../../public/javascripts/getRandomAN.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:url', async (req, res) => {
  try {
    const shortened_url = `http://${req.get('host')}/${req.params.url}`
    const result = await Url.findOne({ shortened_url }).lean(res => res)
    res.redirect(result.original_url)
  }
  catch (err) {
    console.log('catch', err)
    res.render('error', { error: err.message })
  }
})

router.post('/shorten', async (req, res) => {
  try {
    const { original_url } = req.body
    if (original_url.includes(`http://${req.get('host')}`)) {
      res.render('index', {
        tipMessage: '請勿使用本網站的網址進行縮址',
        original_url
      })
    } else {
      const url = {
        original_url,
        shortened_url: `http://${req.get('host')}/${getRandomAN(5)}`
      }
      const result = await Url.findOne({ original_url }).lean(res => res)
      result ? result : Url.create(url)
      res.render('index', { result, url, original_url })
    }
  }
  catch (err) {
    console.log('catch', err)
    res.render('error', { error: err.message })
  }
})

export default router