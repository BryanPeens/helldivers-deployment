const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User'); // Import the User model

class Loadout extends Model {}

Loadout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    stratagems_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define user_id as a foreign key referencing the id field of the User model
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName:true,
    timestamps: true,
    modelName: 'loadout',
  }
);

module.exports = Loadout;
