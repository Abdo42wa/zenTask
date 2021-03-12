import mongoose from 'mongoose'
import Category from '../models/categoryModel.js'

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        console.log(name);
        //if category with that name exist then 
        const categoryExist = await Category.findOne({ name: name });
        if (categoryExist) {
            res.status(400);//bad request
            throw new Error('Category already exists');//throw eror
        }
        const category = await Category.create({
            name: name
        })
        res.send(name)
    } catch (error) {
        console.log(error)
    }
}

const createSubCategory = async (req, res) => {
    try {
        //getting name and parentID from req.body
        const { name, parentID } = req.body;
        const categoryExist = await Category.findOne({ _id: parentID })

        if (categoryExist) {//if category exist
            const newSubCategory = await Category.create({
                name: name,
                parentID: parentID
            })
            console.log(newSubCategory)
            res.send(newSubCategory)
        } else {
            res.status(400);
            throw new Error('Category doesnt exist');
        }
        res.send('labas');

    } catch (error) {
        console.log(error)
    }
}

    const getPerentCategory = async(req,res) => {
        try {
    
            const mainCategory =  await Category.find({ parentID: null });

            res.json(mainCategory);
            //console.log(mainCategory);

        } catch (error) {
           }   console.log(error)
    }

    const getSubCategory = async(req,res) => {
        try {
            //getting name and parentID from req.body
    
          const {parentID} = req.query;
            const subCategory =  await Category.find({ parentID: parentID });

             res.json(subCategory);
             //console.log("labas as cia" +parentID);


        } catch (error) {
           console.log(error)
        }
    }

export { createCategory, createSubCategory,getPerentCategory,getSubCategory }