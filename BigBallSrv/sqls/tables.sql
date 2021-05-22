use bigball;

create table if not exists `User`(
	`id` bigint unsigned primary key not null auto_increment,
    `name` varchar(55) not null,
    `avatar_url` varchar(255) not null
)
engine=innodb default charset=utf8;

create table if not exists `Record`(
	`id` bigint unsigned primary key not null auto_increment,
    `uid` bigint not null,
    `weight` bigint default 0,
    `max_time` varchar(55) 
)
engine=innodb default charset=utf8;