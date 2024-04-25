// Import models
const User = require('./User');// Add User model import
const Match = require('./Match');// Add Match model import
const Loadout = require('./Loadout'); // Add Loadout model import
const Campaign = require('./Campaign'); // Add Campaign model import
const Stratagem = require('./Stratagem'); // Add Stratagem model import

// Define associations between models
User.hasMany(Match); // A user can participate in multiple matches (user can play many matches)
Match.belongsTo(User); // A match belongs to a user (each match is connected to a user)

User.hasMany(Loadout); // A user can have multiple loadouts 
Loadout.belongsTo(User); // A loadout belongs to a user

// Add associations for Match, Strategy, and Loadout models
Campaign.belongsToMany(Match, { through: 'MatchCampaign' }); // A strategy can be associated with multiple matches

Match.belongsToMany(Loadout, { through: 'MatchLoadout' }); // A match can have multiple loadouts associated
Loadout.belongsToMany(Match, { through: 'MatchLoadout' }); // A loadout can be associated with multiple matches

User.hasMany(Campaign); // A user can participate in multiple campaigns
Campaign.belongsTo(User); // A campaign belongs to a user (each match is connected to a user)

// Export models
module.exports = {
  User,
  Match,
  Loadout,
  Campaign,
  Stratagem,
};
