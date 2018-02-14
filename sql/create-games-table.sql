CREATE TABLE `league_manager_pro`.`games` 
( `date_time` DATETIME NOT NULL , 
`home_team_id` INT NOT NULL , 
`away_team_id` INT NOT NULL , 
`home_team_score` INT NOT NULL ,
`away_team_score` INT NOT NULL ,
`league_id` INT NOT NULL ,
`field_id` INT NOT NULL ,
`location` INT NOT NULL ,
`game_type` INT NOT NULL ,
`Status` INT NOT NULL ) ENGINE = InnoDB;

INSERT INTO `games` 
	(`date_time`, `home_team_id`, `away_team_id`, `home_team_score`, `away_team_score`, `league_id`, `field_id`, `location_id`, `game_type`, `Status`) 
	VALUES 
	('2018-02-01 15:00:00', '2', '1', '0', '0', '1', '1', '1', '0', '0');

select distinct home_team_id, away_team_id, t.teamname as hometeam, t2.teamname as awayteam from games left join teams t on games.home_team_id = t.id left join teams t2 on games.away_team_id = t2.id;