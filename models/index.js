// Import models
const User = require('./User');// Add User model import
const Match = require('./Match');// Add Match model import
const Strategy = require('./Strategy');// Add Strategy model import
const Loadout = require('./Loadout'); // Add Loadout model import

// Define associations between models
User.hasMany(Match); // A user can participate in multiple matches (user can play many matches)
Match.belongsTo(User); // A match belongs to a user (each match is connected to a user)

User.hasMany(Strategy); // A user can have multiple strategies (like a plan be or change in strategy)
Strategy.belongsTo(User); // A strategy belongs to a user (each strategy belongs to a user)

User.hasMany(Loadout); // A user can have multiple loadouts 
Loadout.belongsTo(User); // A loadout belongs to a user

// Add associations for Match, Strategy, and Loadout models
Match.belongsToMany(Strategy, { through: 'MatchStrategy' }); // A match can have multiple strategies associated
Strategy.belongsToMany(Match, { through: 'MatchStrategy' }); // A strategy can be associated with multiple matches

Match.belongsToMany(Loadout, { through: 'MatchLoadout' }); // A match can have multiple loadouts associated
Loadout.belongsToMany(Match, { through: 'MatchLoadout' }); // A loadout can be associated with multiple matches

// Export models
module.exports = {
  User,
  Match,
  Strategy,
  Loadout,
};
