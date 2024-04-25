const sequelize = require('../config/connection');
const { Campaign } = require('../models');

const campaignData = require('./campaignData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

  console.log(campaignData);

const cleancampaignData = campaignData.map((campaign) => {  
  return {
    planetIndex: campaign.planetIndex,
    name: campaign.name,
    faction: campaign.faction,
    players: campaign.players,
    health: campaign.health,
    maxHealth: campaign.maxHealth,
    percentage: campaign.percentage,
    defense: campaign.defense,
    majorOrder: campaign.majorOrder,
    biome: campaign.biome.slug,
    biomedescription: campaign.biome.description,
    expireDateTime: campaign.expireDateTime
  }
})

await Campaign.bulkCreate(cleancampaignData, {
    individualHooks: true,
    returning: true,
});
process.exit(0);
} 
seedDatabase();
