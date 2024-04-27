-- Drop the database if it exists
DROP DATABASE IF EXISTS helldive_db;

-- Create the database
CREATE DATABASE helldive_db;

-- Connect to the newly created database
\c helldive_db;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    winCount INTEGER NOT NULL DEFAULT 0,
    lossCount INTEGER NOT NULL DEFAULT 0
);

-- Create the loadouts table with a foreign key constraint
CREATE TABLE IF NOT EXISTS loadouts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id), -- Add user_id column as a foreign key referencing users(id)
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Create the campaigns table to store campaign information
CREATE TABLE IF NOT EXISTS campaigns (
    id SERIAL PRIMARY KEY,
    planetIndex INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    faction VARCHAR(50) NOT NULL,
    players INT NOT NULL,
    health INT NOT NULL,
    max_health INT NOT NULL,
    percentage FLOAT NOT NULL,
    defense BOOLEAN NOT NULL,
    major_order BOOLEAN NOT NULL,
    biome VARCHAR(50) NOT NULL,
    biome_description TEXT NOT NULL,
    expire_date_time FLOAT
);

-- Insert seed data into the users table
INSERT INTO users (name, email, password, winCount, lossCount) VALUES
    ('John Doe', 'john@example.com', 'password123', 10, 5),
    ('Jane Smith', 'jane@example.com', 'password456', 15, 3),
    ('Michael Johnson', 'michael@example.com', 'password789', 20, 8);

-- Insert seed data into the loadouts table
INSERT INTO loadouts (user_id, name, description) VALUES
    (1, 'Assault Loadout', 'Designed for aggressive gameplay'),
    (2, 'Stealth Loadout', 'Focused on covert operations'),
    (3, 'Support Loadout', 'Provides backup and healing for the team');

-- Insert seed data into the campaigns table
INSERT INTO campaigns (planetIndex, name, faction, players, health, max_health, percentage, defense, major_order, biome, biome_description, expire_date_time) VALUES
    (242, 'Ustotu', 'Automatons', 22008, 119961, 200000, 40.0195, TRUE, FALSE, 'desert', 'A desert planet prone to unpredictable and dangerous, sand twisters.', 1714079241.805),
    (201, 'Meissa', 'Automatons', 1926, 372920, 1000000, 62.708, FALSE, FALSE, 'jungle', 'Abundant with life, this wet planet is covered in deep oceans, thick forests, and tall grasses.', NULL),
    (198, 'Marfark', 'Automatons', 2809, 382840, 1000000, 61.716, FALSE, FALSE, 'winter', 'Submerged in eternal winter, this world''s frosty peaks glimmer in the light of its too-distant star.', NULL),
    (158, 'Choepessa IV', 'Automatons', 1116, 449715, 1000000, 55.0285, FALSE, FALSE, 'icemoss', 'Ice and moss-covered rock can be found across most of the surface of this planet.', NULL),
    (156, 'Charbal-VII', 'Automatons', 563, 474302, 1000000, 52.5698, FALSE, FALSE, 'toxic', 'Dense, toxic fumes from deep within the planet''s crust seep out of cracks in the earth and coat the ground in a sickly haze.', NULL),
    (203, 'Menkent', 'Automatons', 3771, 656836, 1000000, 34.3164, FALSE, FALSE, 'desolate', 'Scorching temperatures, high winds, and low precipitation cause a near-constant cycle of fires to sweep this planet, punctuated by short bursts of lush rebirth between infernos.', NULL),
    (194, 'Lesath', 'Automatons', 1235, 729335, 1000000, 27.06649999999999, FALSE, FALSE, 'icemoss', 'Ice and moss-covered rock can be found across most of the surface of this planet.', NULL),
    (259, 'Omicron', 'Terminids', 15135, 901486, 1000000, 9.851399999999998, FALSE, FALSE, 'tundra', 'A perenially chilly climate has allowed short, colourful shrubs to flourish across this planet''s surface.', NULL),
    (34, 'Hellmire', 'Terminids', 13418, 928699, 1000000, 7.130099999999999, FALSE, FALSE, 'desolate', 'Scorching temperatures, high winds, and low precipitation cause a near-constant cycle of fires to sweep this planet, punctuated by short bursts of lush rebirth between infernos.', NULL);
