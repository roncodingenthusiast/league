INSERT INTO `leagues` (`start_date`, `end_date`, `number_of_teams`, `difficulty_level`, `week_day`, `location`, `id`, `league_name`, `league_manager`) VALUES
('2018-02-01', '2018-02-28', 10, 'Medium Rec', 'Thursday', 'Lees Ottawa U ', 1, 'Medium Rec - LEague name', 'thom'),
('2018-02-01', '2018-02-28', 10, 'Medium Rec', 'Thursday', 'Lees Ottawa U ', 2, 'Medium Rec - LEague name', 'thom'),
('0000-00-00', '0000-00-00', 23, 'Recreational', 'tuesday', 'sdf', 3, 'league', NULL),
('0000-00-00', '0000-00-00', 12, 'Beginner / Recreational', 'monday', 'sdf', 4, 'league', 'manager');

INSERT INTO `teams` (`league_id`, `skill_level`, `team_name`, `color`, `captain_email`, `id`) VALUES
(1, 'intermediate', 'roaster_1', 'blue', 'ronal@gmail.com', 1),
(1, 'intermediate', 'roaster_10', 'blue', 'ronal@gmail.com', 2),
(1, 'intermediate', 'roaster_3', 'blue', 'ronal@gmail.com', 3),
(1, 'intermediate', 'roaster_2', 'red', 'ronal@gmail.com', 4),
(1, 'intermediate', 'roaster_4', 'pink', 'ronal@gmail.com', 5),
(1, 'intermediate', 'roaster_5', 'yellow', 'ronal@gmail.com', 6),
(1, 'intermediate', 'roaster_7', 'yellow', 'ronal@gmail.com', 10);