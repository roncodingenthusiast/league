CREATE TABLE `league` (
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `number_of_teams` int(11),
  `difficulty_level` text,
  `week_day` text,
  `location` text,
  `id` integer primary key AUTO_INCREMENT,
  `league_name` text,
  `league_manager` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `league`
--

INSERT INTO `league` (`start_date`, `end_date`, `number_of_teams`, `difficulty_level`, `week_day`, `location`, `league_name`, `league_manager`) VALUES
('2018-02-01', '2018-02-28', 10, 'Medium Rec', 'Thursday', 'Lees Ottawa U ', 'Medium Rec - LEague name', 'thom'),
('2018-02-01', '2018-02-28', 10, 'Medium Rec', 'Thursday', 'Lees Ottawa U ', 'Medium Rec - LEague name', 'thom');