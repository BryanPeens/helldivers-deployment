// const inquirer = require('inquirer');
// const express = require('express');
// const logo = require('asciiart-logo');
// // Import and require Pool (node-postgres)
// // We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
// const { Pool } = require('pg');

// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Connect to database (you will need to use your own personal postgres username and password)
// const pool = new Pool(
//   {
//     user: 'postgres',
//     password: 'password',
//     host: 'localhost',
//     database: 'helldiver_db',
//   },
//   console.log(`Connected to the helldiver_db database.`)
// )

// pool.connect();

// // Creates a logo for the Employee Tracker in the console
// console.log(
//   logo({
//       name: 'Helldivers Deployment Manager',
//       font: 'Speed',
//       lineChars: 10,
//       padding: 2,
//       margin: 3,
//       borderColor: 'grey',
//       logoColor: 'bold-green',
//       textColor: 'green',
//   })
//   .render()
// );

// // Prompt user for what action they want to do next on the database
// function start() {
//   inquirer
//     .prompt({
//       name: 'action',
//       type: 'list',
//       message: 'What would you like to do?',
//       choices: [
//         'View all Helldivers',
//         'View all Planets',
//         'View all Strategems',
//         'View all Matches',
//         'Add a Helldiver',
//         'Add a Planet',
//         'Add a Stratagem',
//         'Update a Helldiver',
//         'Update a Planet',
//         'Update a Stratagem',
//         'Exit',
//       ],
//     })
//     // Switch case to handle the user's choice between View all deparements, roles, employees
//     .then((answer) => {
//       switch (answer.action) {
//         case 'View all Helldivers':
//           pool.query(`SELECT * FROM helldivers`, (err, result) => {
//             if (err) throw err;
//             console.log("Viewing All Helldivers: ");
//             console.table(result.rows);
//             start();
//           });
//           break;
//         case 'View all Planets':
//           pool.query(`SELECT * FROM planets`, (err, result) => {
//             if (err) throw err;
//             console.log("Viewing All Planets: ");
//             console.table(result.rows);
//             start();
//           });
//           break;

//         case 'View all Strategems':
//           pool.query(`SELECT * FROM strategems`, (err, result) => {
//             if (err) throw err;
//             console.log("Viewing All Strategems: ");
//             console.table(result.rows);
//             start();
//           });
//           break;
//         case 'View all Matches':
//           pool.query(`SELECT * FROM matches`, (err, result) => {
//             if (err) throw err;
//             console.log("Viewing All Matches: ");
//             console.table(result.rows);
//             start();
//           });
//           break;
//         }
//     });
// }

// // Start the application after connecting to the database
// start();

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });