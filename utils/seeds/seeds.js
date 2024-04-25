const sequelize = require('../../config/connection');
const { User, Match, Strategy, Loadout } = require('../../models');

const seedDatabase = async () => {
  try {
    // Create the database tables
    await sequelize.sync({ force: true });

    // Seed the database with dummy data
    const users = await User.bulkCreate([
      { name: 'John Doe', email: 'john@example.com', password: 'password123' },
      { name: 'Jane Smith', email: 'jane@example.com', password: 'securepassword' },
      { name: 'Adam Johnson', email: 'adam@example.com', password: 'strongpassword' }
    ]);

    const matches = await Match.bulkCreate([
      { date: '2024-04-25', location: 'City A' },
      { date: '2024-04-26', location: 'City B' },
      { date: '2024-04-27', location: 'City C' }
    ]);

    const strategies = await Strategy.bulkCreate([
      { name: 'Strategy 1', description: 'Description 1' },
      { name: 'Strategy 2', description: 'Description 2' },
      { name: 'Strategy 3', description: 'Description 3' }
    ]);

    const loadouts = await Loadout.bulkCreate([
      { name: 'Loadout 1', description: 'Description 1' },
      { name: 'Loadout 2', description: 'Description 2' },
      { name: 'Loadout 3', description: 'Description 3' }
    ]);

    // Add relationships between tables
    await users[0].addMatch(matches[0]);
    await users[1].addMatch(matches[1]);
    await users[2].addMatch(matches[2]);

    await matches[0].addStrategy(strategies[0]);
    await matches[1].addStrategy(strategies[1]);
    await matches[2].addStrategy(strategies[2]);

    await matches[0].addLoadout(loadouts[0]);
    await matches[1].addLoadout(loadouts[1]);
    await matches[2].addLoadout(loadouts[2]);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
};

seedDatabase();
