const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const routes = express.Router()
const upload = multer(uploadConfig)

const SellerController = require('./controllers/SellerController')
const ProductController = require('./controllers/ProductController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.post('/sessions', SessionController.create)

routes.get('/sellers', SellerController.index)
routes.post('/sellers', SellerController.create)

routes.get('/profile', ProfileController.index)

routes.get('/products', ProductController.index)
routes.post('/products', upload.single('image'), ProductController.create)
routes.put('/products/:id', upload.single('image'), ProductController.put)
routes.delete('/products/:id', ProductController.delete)

module.exports = routes
