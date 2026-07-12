require("dotenv").config(); // Load environment variables
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const fs = require("fs"); // Added
const path = require("path"); // Added
// Import Models
const Product = require("./products")(sequelize, DataTypes);
const Tool = require("./tools")(sequelize, DataTypes);

async function syncDatabase() {
  try {
    // 1. Disable Foreign Key Checks
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");

    // 2. Sync your database
    const shouldForce = process.env.DB_FORCE_RESET === "true";

    await sequelize.sync({ force: shouldForce });

    // 3. Re-enable Foreign Key Checks
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

    console.log("Database synchronized successfully.");

    // 4. Seed Data
    const productsDataPath = path.join(__dirname, "../data/products.json");

    if (fs.existsSync(productsDataPath)) {
      const productData = JSON.parse(
        fs.readFileSync(productsDataPath, "utf-8"),
      );

      await Product.bulkCreate(productData, {
        ignoreDuplicates: true, // Prevents errors if products already exist
      });
    }

    const toolsDataPath = path.join(__dirname, "../data/tools.json");

    if (fs.existsSync(toolsDataPath)) {
      const toolData = JSON.parse(fs.readFileSync(toolsDataPath, "utf-8"));

      await Tool.bulkCreate(toolData, {
        ignoreDuplicates: true, // Prevents errors if tools already exist
      });
      console.log("Tools seeded successfully.");
    }
  } catch (error) {
    console.error("Error synchronizing/seeding database:", error);
  }
}

module.exports = {
  sequelize,
  syncDatabase,
  Product,
  Tool,
};
