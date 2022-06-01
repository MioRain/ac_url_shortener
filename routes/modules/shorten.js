import express from 'express'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    console.log('test')
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
    res.render('error', { error: err.message })
  }
})

export default router