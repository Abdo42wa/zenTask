import mongoose from 'mongoose';
import Product from '../models/productModel.js';


const createProduct = async (req, res) => {
    try {
        //getting name,image,price,description,category(id) from req.body
        const { name, image, price, description, category } = req.body;
        console.log(name);
        //create new document in products collection
        const newProduct = Product.create({//passing to fields values from req.body
            name: name,
            image: image,
            price: price,
            description: description,
            category: category
        })

        //response/return
        res.send(newProduct);
    } catch (error) {
        console.log(error);
    }
}

const getProducts = async (req, res) => {
    try {
        //find all products
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(error)
    }
}


export { createProduct, getProducts }


