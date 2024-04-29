const sequelize = require('../config/connection');
const { Stratagem } = require('../models');

const stratagemData = require('./stratagemData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

const cleanstratagemData = stratagemData.map((stratagem) => {  
  return {
    name: stratagem.name,
    type: stratagem.type,
    description: stratagem.description,
    filename: stratagem.filename
  }
})

await Stratagem.bulkCreate(cleanstratagemData, {
    individualHooks: true,
    returning: true,
});
process.exit(0);
} 
seedDatabase();
