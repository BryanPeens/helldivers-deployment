const sequelize = require('../../config/connection');
const { User, Match, Strategy, Loadout } = require('../../models');
const userData = require('./userData.json');
const matchData = require('./matchData.json');
const strategyData = require('./strategyData.json');
const loadoutData = require('./loadoutData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    returning: true,
  });

  const matches = await Match.bulkCreate(matchData, {
    returning: true,
  });

  const strategies = await Strategy.bulkCreate(strategyData, {
    returning: true,
  });

  const loadouts = await Loadout.bulkCreate(loadoutData, {
    returning: true,
  });

  // Example of associating data if there are associations
  await users[0].setMatches([matches[0], matches[1]]);
  await users[1].setStrategies([strategies[0]]);
  await users[2].setLoadouts([loadouts[0]]);

  process.exit(0);
};

seedDatabase();