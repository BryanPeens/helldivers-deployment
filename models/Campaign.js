const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection'); 

class Campaign extends Model {}

Campaign.init({
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    planetIndex: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    faction: {
        type: DataTypes.STRING,
        allowNull: false
    },
    players: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    health: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxHealth: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    percentage: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    defense: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    majorOrder: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    biome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    biomedescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expireDateTime: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Campaign',
    tableName: 'campaigns'
});

module.exports = Campaign;