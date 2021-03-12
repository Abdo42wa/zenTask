import mongoose from 'mongoose'

//create schema for all documents in products collection
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parentID: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        default:null,
        ref: 'Category'
    }
})

//create model that represents categories collection
const Category = mongoose.model('Category', categorySchema)

export default Category