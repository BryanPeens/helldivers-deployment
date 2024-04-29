const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  console.log("================================================");
  console.log(userData);

const cleanuserData = userData.map((user) => {  
  return {
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password,
    winCount: user.winCount,
    lossCount: user.lossCount,
    level: user.level,
    title: user.title,
    titleFilename: user.titleFilename,
  }
})

await User.bulkCreate(cleanuserData, {
    individualHooks: true,
    returning: true,
});
process.exit(0);
} 
seedDatabase();