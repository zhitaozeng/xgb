-- 权限表 --
CREATE TABLE permission (
  pid INT(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL DEFAULT '',
  url varchar(255) DEFAULT '',
  PRIMARY KEY(pid)
)ENGINE = Innodb DEFAULT charset = utf8;

insert into permission values ('1','add','');
insert into permission values ('2','delete','');
insert into permission values ('3','edit','');
insert into permission values ('4','query','');

-- 用户表 --
CREATE  table  user(
  uid INT(11) NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL DEFAULT '',
  password varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY(uid)
)ENGINE = Innodb DEFAULT charset = utf8;

insert into user values ('1','admin','123456');
insert into user values ('2','zzt','123456');


-- 角色表 --
CREATE  table  role(
  rid INT(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY(rid)
)ENGINE = Innodb DEFAULT charset = utf8;

insert into role values ('1','admin');
insert into role values ('1','user');

-- 权限角色关联表
CREATE  table  permission_role(
  rid INT(11) NOT NULL,
  pid INT(11) NOT NULL,
  key idx_rid (rid),
  key idx_pid (pid)
)ENGINE = Innodb DEFAULT charset = utf8;
insert into permission_role values ('1','1');
insert into permission_role values ('1','2');
insert into permission_role values ('1','3');
insert into permission_role values ('1','4');
insert into permission_role values ('2','1');
insert into permission_role values ('2','4');



-- 用户角色关联表
CREATE  table  user_role(
  uid INT(11) NOT NULL,
  rid INT(11) NOT NULL,
  key idx_uid (uid),
  key idx_rid (rid)
)ENGINE = Innodb DEFAULT charset = utf8;
insert into user_role values ('1','1');
insert into user_role values ('2','2');