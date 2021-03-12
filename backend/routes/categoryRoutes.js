import express from 'express'
const router = express.Router()
import { createCategory, createSubCategory,getPerentCategory,getSubCategory } from '../controllers/categoryController.js'

//when user makes post request to localhost:5000/api/category.
router.post('/create/category', createCategory);//it will call createCategory function 

router.post('/create/subcategory', createSubCategory);
router.get('/subcategorys',getSubCategory);

router.get('/all/category',getPerentCategory);

export default router