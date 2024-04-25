-- Drop the database if it exists
DROP DATABASE IF EXISTS helldive_db;

-- Create the database
CREATE DATABASE helldive_db;

-- -- Connect to the newly created database
-- \c helldive_db;

-- -- Create the users table
-- CREATE TABLE IF NOT EXISTS users (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     winCount INTEGER NOT NULL DEFAULT 0,
--     lossCount INTEGER NOT NULL DEFAULT 0
-- );

-- -- Create the matches table
-- CREATE TABLE IF NOT EXISTS matches (
--     id SERIAL PRIMARY KEY,
--     date DATE NOT NULL,
--     location VARCHAR(255) NOT NULL,
--     matchResult BOOLEAN NOT NULL
-- );

-- -- Create the strategies table
-- CREATE TABLE IF NOT EXISTS strategies (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description TEXT
-- );

-- -- Create the loadouts table
-- CREATE TABLE IF NOT EXISTS loadouts (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description TEXT,
--     weapons VARCHAR(255) NOT NULL,
--     armor VARCHAR(255) NOT NULL,
--     stratagems VARCHAR(255) NOT NULL,
--     boosters VARCHAR(255) NOT NULL
-- );

-- -- Create the user_matches table for many-to-many relationship
-- CREATE TABLE IF NOT EXISTS user_matches (
--     user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--     match_id INTEGER REFERENCES matches(id) ON DELETE CASCADE,
--     PRIMARY KEY (user_id, match_id)
-- );

-- -- Create the match_strategies table for many-to-many relationship
-- CREATE TABLE IF NOT EXISTS match_strategies (
--     match_id INTEGER REFERENCES matches(id) ON DELETE CASCADE,
--     strategy_id INTEGER REFERENCES strategies(id) ON DELETE CASCADE,
--     PRIMARY KEY (match_id, strategy_id)
-- );

-- -- Create the match_loadouts table for many-to-many relationship
-- CREATE TABLE IF NOT EXISTS match_loadouts (
--     match_id INTEGER REFERENCES matches(id) ON DELETE CASCADE,
--     loadout_id INTEGER REFERENCES loadouts(id) ON DELETE CASCADE,
--     PRIMARY KEY (match_id, loadout_id)
-- );

-- -- Seed the users table
-- INSERT INTO users (name, email, password, winCount, lossCount) VALUES
--     ('John Doe', 'john@example.com', 'password123', 10, 5),
--     ('Jane Smith', 'jane@example.com', 'securepassword', 5, 10),
--     ('Adam Johnson', 'adam@example.com', 'strongpassword', 7, 7);

-- -- Seed the matches table
-- INSERT INTO matches (date, location, matchResult) VALUES
--     ('2024-04-25', 'Planet A', true),
--     ('2024-04-26', 'Planet B', false),
--     ('2024-04-27', 'Planet C', true);

-- -- Seed the strategies table
-- INSERT INTO strategies (name, description) VALUES
--     ('Strategy 1', 'Description 1'),
--     ('Strategy 2', 'Description 2'),
--     ('Strategy 3', 'Description 3');

-- -- Seed the loadouts table
-- INSERT INTO loadouts (name, description, weapons, armor, stratagems, boosters) VALUES
--     ('Loadout 1', 'Description 1', 'Primary: AR-23 Liberator, Secondary: P-2 Peacemaker, Explosive: G-12 High Explosive', 'Heavy Armor, so choose those with Fortified or Extra Padding perks', 'Expendable Anti-Tank, Eagle Cluster Bomb, Orbital Gatling Barrage, Gatling Sentry', 'Hellpod Optimization'),
--     ('Loadout 2', 'Description 2', 'Primary: AR-23 Liberator, Secondary: P-2 Peacemaker, Explosive: G-12 High Explosive', 'Heavy Armor, so choose those with Fortified or Extra Padding perks', 'Expendable Anti-Tank, Eagle Cluster Bomb, Orbital Gatling Barrage, Gatling Sentry', 'Hellpod Optimization'),
--     ('Loadout 3', 'Description 3', 'Primary: AR-23 Liberator, Secondary: P-2 Peacemaker, Explosive: G-12 High Explosive', 'Heavy Armor, so choose those with Fortified or Extra Padding perks', 'Expendable Anti-Tank, Eagle Cluster Bomb, Orbital Gatling Barrage, Gatling Sentry', 'Hellpod Optimization');

-- -- Associate users with matches
-- INSERT INTO user_matches (user_id, match_id) VALUES
--     (1, 1),
--     (2, 2),
--     (3, 3);

-- -- Associate matches with strategies
-- INSERT INTO match_strategies (match_id, strategy_id) VALUES
--     (1, 1),
--     (2, 2),
--     (3, 3);

-- -- Associate matches with loadouts
-- INSERT INTO match_loadouts (match_id, loadout_id) VALUES
--     (1, 1),
--     (2, 2),
--     (3, 3);
