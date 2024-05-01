# Helldivers Deployment

# Important!
- Ignore the seeds.js file for now, it is not yet setup correctly, follow instructions bellow to setup the DB.
- the models and relationships are setup, the campaign table and relation is still in progress.



## Table of Contents
- [Description](#description)

- [User Story](#user-story)

- [Features](#features)

- [Setup Instructions](#setup-instructions)

- [Demonstration](#demonstration)

- [Credits](#credits)

- [Questions](#questions)


## Description 
The Helldiver's Deployment app is designed to emulate the thrill of playing the Helldivers 2 game from your web browser. Built using the Helldiver's Training Manual Unofficial API and a combination of Postgres, Handlebars, Express, Sequelize, and Node.js.


## User Story
- User story: I want to be able to participate in matches and join other users when playing matches and see if my loadouts bring us victory. 
- I want to be able to add or remove loadouts, as well as the ability to modify my loadouts.
- I want to see the stats of other users and their matches
- To be able to view the live Campaigns



## Features
- User can create their own profile and log in to access their load out
- User can modify their loadout to have 4 separate strategems, a different user name/level/description, and a different profile picture
- User can access the latest campaign stats and see which planets are currently active with up to date data
- User can access matchmaking and play against 3 randomly selected other users and have their match stored on the server

## Setup Instructions
 - To setup the database, in your postgres run ( \i schema.sql ), this will create and seed the database with dummy data.

### Setup and Run server.
- check the .env file remove the .EXAMPLE part
- run npm install
- run npm start

## Demonstration
![image](https://github.com/BryanPeens/helldivers-deployment/assets/162182740/1a3c01f2-c2c5-4043-8c05-601f5ba3a56a)
![image](https://github.com/BryanPeens/helldivers-deployment/assets/162182740/4eb98498-778b-4209-a028-1c571c59d826)
![image](https://github.com/BryanPeens/helldivers-deployment/assets/162182740/2d87504c-423c-4258-82be-e71501b76401)
![image](https://github.com/BryanPeens/helldivers-deployment/assets/162182740/1565fe01-faef-41af-a6a6-26b37711f4f2)





## Credits
- Bryan Peens
- Nolan Merchan
- Edward Lawrence

## License
 ![Empty Badge](https://img.shields.io/badge/MIT-License-blue)

## Questions
 [BryanPeens](https://github.com/BryanPeens/)
 [DRX-88](https://github.com/DRX-88/)
 [ZeDevGit](https://github.com/ZeDevGit)
