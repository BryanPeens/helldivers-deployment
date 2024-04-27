const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const inquirer = require('inquirer');
const logo = require('asciiart-logo');
require('dotenv').config();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public'))); 

app.use(routes);

// const pool = new Pool(
//   {
//     DB_NAME,
//     DB_PASSWORD,
//     host: 'localhost',
//     database: 'helldive_db',
//   },
//   console.log(`Connected to the helldiver_db database.`)
// )

// pool.connect();

// Creates a logo for the Employee Tracker in the console
console.log(
  logo({
      name: 'Helldivers Deployment Manager',
      font: 'Speed',
      lineChars: 10,
      padding: 2,
      margin: 3,
      borderColor: 'grey',
      logoColor: 'bold-green',
      textColor: 'green',
  })
  .render()
);

// Prompt user for what action they want to do next on the database
async function start() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all Helldivers',
        'View all Campaigns',
        'View all Strategems',
        'View all Matches',
        'Add a Helldiver',
        'Add a Planet',
        'Add a Stratagem',
        'Update a Helldiver',
        'Update a Planet',
        'Update a Stratagem',
        'Exit',
      ],
    })
    // Switch case to handle the user's choice between View all deparements, roles, employees
    .then((answer) => {
      switch (answer.action) {
        case 'View all Helldivers':
          const fetchData = async () => {
            const result = await sequelize.query('SELECT * FROM users', { type: sequelize.QueryTypes.SELECT });
            console.table(result);
            start();
          };
          fetchData();
          break;
        case 'View all Campaigns':
          const planetResults = async () => {
            const result = await sequelize.query('SELECT * FROM campaigns', { type: sequelize.QueryTypes.SELECT });
            console.table(result);
            start();
          };
          planetResults();
          break;
        case 'View all Strategems':
          const strategemResults = async () => {
            const result = await sequelize.query('SELECT * FROM strategems', { type: sequelize.QueryTypes.SELECT });
            console.table(result);
            start();
          };
          strategemResults();
          break;
        case 'View all Matches':
          const matchesResults = sequelize.query('SELECT * FROM matches', { type: sequelize.QueryTypes.SELECT })
          console.log(matchesResults);
          start();
          break;
        }
    });
}

// Start the application after connecting to the database
start();


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
