-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:7777
-- Generation Time: Mar 23, 2018 at 09:57 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `pro_league_manager`
--

-- --------------------------------------------------------

--
-- Table structure for table `league`
--

CREATE TABLE `league` (
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `number_of_teams` int(11) DEFAULT NULL,
  `difficulty_level` text,
  `week_day` text,
  `location` text,
  `id` int(11) NOT NULL,
  `league_name` text,
  `league_manager` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `league`
--

INSERT INTO `league` (`start_date`, `end_date`, `number_of_teams`, `difficulty_level`, `week_day`, `location`, `id`, `league_name`, `league_manager`) VALUES
('2018-02-01', '2018-02-28', 10, 'Medium Rec', 'Thursday', 'Lees Ottawa U ', 1, 'Medium Rec - LEague name', 'thom'),
('2018-02-01', '2018-02-28', 10, 'Medium Rec', 'Thursday', 'Lees Ottawa U ', 2, 'Medium Rec - LEague name', 'thom'),
('0000-00-00', '0000-00-00', 23, 'Recreational', 'tuesday', 'sdf', 3, 'league', NULL),
('0000-00-00', '0000-00-00', 12, 'Beginner / Recreational', 'monday', 'sdf', 4, 'league', 'manager');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `league`
--
ALTER TABLE `league`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `league`
--
ALTER TABLE `league`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

CREATE USER 'league'@'localhost';
GRANT ALL PRIVILEGES ON dbTest.* To 'league'@'localhost' IDENTIFIED BY 'league';