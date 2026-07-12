// models/tools.js
module.exports = (sequelize, DataTypes) => {
  const Tool = sequelize.define(
    "Tool",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT },
      affiliate_link: { type: DataTypes.STRING, allowNull: false },
      category: { type: DataTypes.STRING },
      seo_title: { type: DataTypes.STRING },
      seo_description: { type: DataTypes.STRING(255) },
      slug: { type: DataTypes.STRING, unique: true }
    },
    { 
      timestamps: true, 
      tableName: "tools" 
    }
  );
  return Tool;
};