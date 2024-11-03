const CategoryModel = require('../models/category')

exports.getAll = async (req, res) => {
    try {
        const category = await CategoryModel.find().populate('products');
        return res.status(200).json({ message: 'All categories fetched successfully', category });
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'server error', e });
    }
}

exports.read = async (req, res) => {
    try {
        const { slug } = req.params;

        const category = await CategoryModel.findOne({slug}).populate('products');

        if (!category) {
            return res.status(404).json({ message: 'Slug not matched. Category not found' });
        }

        return res.status(200).json({ message: 'Category fetched successfully', category});
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'server error', e });
    }
}