---- databse ----
USE blog_app_db;

---- drop ----
DROP TABLE IF EXISTS `m_user`;
DROP TABLE IF EXISTS `m_article`;
DROP TABLE IF EXISTS `c_article_tag`;
DROP TABLE IF EXISTS `m_tag`;

---- create ----
create table IF not exists `m_user`
(
    `id` int not null auto_increment,
    `login_id` varchar(30),
    `password` varchar(50),
    `email` varchar(255),
    `name` varchar(255),
    `create_at` timestamp not null default current_timestamp,
    `update_at` timestamp not null default current_timestamp on update current_timestamp,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

create table IF not exists `m_article`
(
    `id` int not null auto_increment,
    `title` varchar(255),
    `body` text,
    `publish_flag` boolean not null default 0,
    `create_at` timestamp not null default current_timestamp,
    `update_at` timestamp not null default current_timestamp on update current_timestamp,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

create table IF not exists `c_article_tag`
(
    `article_id` int not null,
    `tag_id` int not null,
    `create_at` timestamp not null default current_timestamp,
    `update_at` timestamp not null default current_timestamp on update current_timestamp,
    PRIMARY KEY (`article_id`, `tag_id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

create table IF not exists `m_tag`
(
    `id` int not null auto_increment,
    `name` varchar(255),
    `create_at` timestamp not null default current_timestamp,
    `update_at` timestamp not null default current_timestamp on update current_timestamp,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
