const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'Loadout',
  }
);

module.exports = Loadout;
