import mongoose from 'mongoose';

//create schema for all documents in products collection
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    //category
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }//reference to specific category
});

//create model. which represents
const Product = mongoose.model('Product', productSchema)

export default Product
