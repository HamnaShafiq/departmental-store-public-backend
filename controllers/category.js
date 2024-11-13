const CategoryModel = require('../models/category')

exports.getAll = async (req, res) => {
    try {
        const data = await CategoryModel.find().populate('products');
        console.log('data', data);
        
        return res.status(200).json({ message: 'All categories fetched successfully', data });
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'server error', e });
    }
}

exports.read = async (req, res) => {
    try {
        const { slug } = req.params;

        const data = await CategoryModel.findOne({slug}).populate('products');

        if (!data) {
            return res.status(404).json({ message: 'Slug not matched. Category not found' });
        }

        return res.status(200).json({ message: 'Category fetched successfully', data});
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'server error', e });
    }
}