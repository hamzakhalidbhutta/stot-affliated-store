const { sequelize } = require('./config/db');
const Product = require('./models/product');
const fs = require('fs');

async function seedDatabase() {
  try {
    // 1. Authenticate DB connection
    await sequelize.authenticate();
    console.log('Database connected.');

    // 2. Read the JSON file
    const productsData = JSON.parse(fs.readFileSync('./products.json', 'utf8'));

    // 3. Bulk insert
    await Product.bulkCreate(productsData);
    console.log('Successfully seeded products!');
    
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

module.exports = seedDatabase;