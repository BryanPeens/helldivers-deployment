const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
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
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    needed_funding: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stratagem_image: {
      type: DataTypes.STRING, // Assuming URLs are stored as strings
      allowNull: true, // Nullable if images are optional
    },
    orbital_cannon_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hangar_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bridge_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatar_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    match_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'match',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;
