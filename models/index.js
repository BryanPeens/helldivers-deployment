// Import models
const User = require('./User');// Add User model import
const Match = require('./Match');// Add Match model import
const Loadout = require('./Loadout'); // Add Loadout model import
const Campaign = require('./Campaign'); // Add Campaign model import
const Stratagem = require('./Stratagem'); // Add Stratagem model import
const Project = require('./Project');

// Define associations between models
User.hasMany(Match, { foreignKey: 'user_id' }); // A user can participate in multiple matches (user can play many matches)
Match.belongsTo(User, { foreignKey: 'user_id' }); // A match belongs to a user (each match is connected to a user)

User.hasMany(Project, { foreignKey: 'user_id' }); // A user can have multiple loadouts 
Project.belongsTo(User, { foreignKey: 'user_id' }); // A loadout belongs to a user

// Add associations for Match, campaign, and Loadout models
Campaign.hasMany(Match, { foreignKey: 'campaign_id' }); 
Match.belongsTo(Campaign, { foreignKey: 'campaign_id' })

Match.belongsToMany(Project, { through: 'project_id' }); // A match can have multiple loadouts associated
Project.belongsToMany(Match, { through: 'project_id' }); // A loadout can be associated with multiple matches

// Export models
module.exports = {
  User,
  Match,
  Loadout,
  Campaign,
  Stratagem,
  Project,
};
