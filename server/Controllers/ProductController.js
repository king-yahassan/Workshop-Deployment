const Product = require('../Models/ProductModel')

//create product

const newProduct = async (req, res) => {
    try {
        const {productName , productType , productPrice} = req.body

        const product = await Product.create({
            productName,
            productType,
            productPrice
        })
        return res.status(201).json({message : "Successfully create product" , product})
    } catch (error) {
        console.log("error in the product creation");
        return res.status(500).json(error)
    }
}

// Get all product

const allProducts = async (req , res) => {
    try {
        const  products = await Product.find()
        return res.status(200).json({message : "Successfully get product" , products})
        
    } catch (error) {
        console.log("error in the product creation");
        return res.status(500).json(error)
    }
}


module.exports = { newProduct ,allProducts}