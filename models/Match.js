// Import Sequelize and DataTypes
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Match model
class Match extends Model {}

// Initialize Match model
Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    matchDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    matchResult: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'Match',
  }
);

// Export Match model
module.exports = Match;
