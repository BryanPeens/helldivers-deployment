// Import Sequelize and DataTypes
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Import other models
const User = require('./User');
const Project = require('./Project');

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
      allowNull: true,
    },
    matchResult: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'campaign',
        key: 'id',
      },
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'project',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName:true,
    timestamps: true,
    modelName: 'match',
  }
);


// Export Match model
module.exports = Match;
