// Import Sequelize and DataTypes
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Strategy model
class Strategy extends Model {}

// Initialize Strategy model
Strategy.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    strategyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strategyDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'Strategy',
  }
);

// Export Strategy model
module.exports = Strategy;
