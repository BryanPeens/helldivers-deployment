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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    weapons: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    armor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stratagems: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boosters: {
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
