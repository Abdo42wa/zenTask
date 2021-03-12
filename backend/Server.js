import express from 'express';
import bodyParser from 'body-parser'
const app = express(); // function that reprathent express\
import connectDB from './db/db.js';
import { createCategory, createSubCategory } from './controllers/categoryController.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



connectDB();




app.get('/', function (req, res) {

    console.log('go go');
})


//for anything that goes to /api/category is going to be linked to productsRoutes.js
//Where we have methods that will catch all HTTP request to /api/category
app.use('/api/category', categoryRoutes);//we just use middleware


app.use('/api/products', productRoutes)//we just use middleware

// create server on port 
app.listen(5000, function () {
    console.log("working");
})