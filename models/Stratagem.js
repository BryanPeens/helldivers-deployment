const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection'); 

class Stratagem extends Model {}

Stratagem.init({ 
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    filename: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'stratagem',
});
