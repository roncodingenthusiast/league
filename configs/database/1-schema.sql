SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS pro_league_manager;
CREATE USER 'league'@'%';
GRANT ALL PRIVILEGES ON *.* To 'league'@'%' IDENTIFIED BY 'league';
USE pro_league_manager;
CREATE TABLE `leagues` (
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `number_of_teams` int(11) DEFAULT NULL,
  `difficulty_level` text,
  `week_day` text,
  `location` text,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `league_name` text,
  `league_manager` text,
     PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `teams` (
  `league_id` int(11),
  `skill_level` text,
  `team_name` text,
  `color` text,
  `captain_email` text,
  `id` int(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `games` (
  `game_date` date,
  `home_team_id` int(11),
  `away_team_id` int(11),
  `league_id` int(11),
  `field` text,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `referree_id` int(11),
     PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;