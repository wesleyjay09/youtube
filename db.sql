createdb youtube

psql youtube
 
CREATE TABLE videos (
    id SERIAL PRIMARY KEY NOT NULL,
    videoKey INT NOT NULL
);

INSERT INTO videos (videoKey) VALUES (1);
INSERT INTO videos (videoKey) VALUES (2);
INSERT INTO videos (videoKey) VALUES (3);
INSERT INTO videos (videoKey) VALUES (4);
INSERT INTO videos (videoKey) VALUES (5);
INSERT INTO videos (videoKey) VALUES (6);
INSERT INTO videos (videoKey) VALUES (7);
INSERT INTO videos (videoKey) VALUES (8);
INSERT INTO videos (videoKey) VALUES (9);
INSERT INTO videos (videoKey) VALUES (10);
