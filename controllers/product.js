const ProductModel = require('../models/product')

exports.getAll = async (req, res) => {
    try {
        const products = await ProductModel.find();
        return res.status(200).json({ message: 'All products fetched successfully', products });
    } catch (e) {
        console.log(e);
        sendErrorResponse(res, 'Failed to fetch products', e);
    }
};

exports.read = async (req, res) => {
    try {
        const { slug } = req.params;
        const product = await ProductModel.findOne({ slug });

        if (!product) {
            return res.status(404).json({ message: 'Slug not matched. Product not found', products });
        }

        return res.status(404).json({ message: 'Product fetched successfully', product });
    } catch (e) {
        console.log(e);
        sendErrorResponse(res, 'Server error', e, 500);
    }
};
