Create Table profile(
    profile_id serial,
    username text,
    
    PRIMARY KEY(profile_id)
);

Create Table comment(
profile_id int,
comment_id serial,
post text,
replysec serial PRIMARY KEY, 
pinned boolean,
thumbsup int,
thumbsdown int, 
videoKey int,
FOREIGN KEY(profile_id) 
REFERENCES profile(profile_id)
);

CREATE TABLE reply(
    profile_id int,
    reply_sec int,
    reply_id serial,
    reply_target int,
    thumbsup int,
    thumbsdown int,
    FOREIGN KEY(profile_id) 
    REFERENCES profile(profile_id),
    FOREIGN KEY(reply_sec) 
    REFERENCES comment(replysec)
);

INSERT INTO profile(username) VALUES('lambo');
INSERT INTO profile(username) VALUES('arthur');
INSERT INTO profile(username) VALUES('kolby');
INSERT INTO profile(username) VALUES('wes');
INSERT INTO profile(username) VALUES('tyler');
INSERT INTO profile(username) VALUES('jeffry');
INSERT INTO profile(username) VALUES('shin');
INSERT INTO profile(username) VALUES('elbow');
INSERT INTO profile(username) VALUES('yuki');
INSERT INTO profile(username) VALUES('lexi');

INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown , videoKey) VALUES(1, 'great video', false, 4, 2, 1);

INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown, videoKey) VALUES(1, 'puttem in a coffin', true, 99, 1, 2);
INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown, videoKey) VALUES(1, 'you nervouse', false, 5, 3, 2);
INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown, videoKey) VALUES(1, 'mehh could be better', false, 4, 2, 3);
INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown, videoKey) VALUES(1, 'try getting a better camera', false, 45, 2, 4);
INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown, videoKey) VALUES(2, 'very insperational video', false, 1, 22, 1);
INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown, videoKey) VALUES(2, 'can tell you really worked hard on this', false, 1, 52, 2);
INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown, videoKey) VALUES(2, 'the talent is unreal', false, 3, 2, 3);
INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown, videoKey) VALUES(3, 'never gonna give you up', true, 3, 2, 1);
INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown, videoKey) VALUES(3, 'im snacking', false, 47, 2, 2);
INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown, videoKey) VALUES(3, 'where there is light theres always darkness', true, 69, 0, 3);

UPDATE comment SET thumbsup = thumbsup +1 WHERE comment_id = 25;