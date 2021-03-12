import express from 'express'
const router = express.Router()
import { createProduct, getProducts } from '../controllers/productController.js'

//when user makes post request to localhost:5000/api/products/createProduct.
router.post('/createProduct', createProduct);//it will call createProduct function which
router.get('/', getProducts);//when you make get request to localhost:5000/api/products

export default router