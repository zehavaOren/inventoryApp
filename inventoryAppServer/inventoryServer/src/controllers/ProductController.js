const dbService = require('../services/dbService');

const getAllProducts = async (req, res) => {
    try {
        const pool = await dbService.getPool();
        const result = await pool.request().query('SELECT * FROM products');
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'An error occurred while fetching products.' });
    }
};

module.exports = {
    getAllProducts
};