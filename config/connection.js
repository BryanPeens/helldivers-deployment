const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    // process.env.DB_HOST,
    // process.env.DB_PORT,
    {
      host: 'helldive_db',
      dialect: 'postgres'
    }
  );
}

module.exports = sequelize;
