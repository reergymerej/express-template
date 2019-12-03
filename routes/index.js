import express from 'express'
var router = express.Router()

/* GET home page. */
router.get('/', (_req, res) => {
  console.log('Is your debugger working?')
  res.render('index', { title: 'PROJECT_NAME' })
})

module.exports = router
