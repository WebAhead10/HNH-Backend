BEGIN;

DROP TABLE IF EXISTS users ,workers CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE workers (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    jobtitle VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    ratenumber VARCHAR NOT NULL,
    phonenum VARCHAR(255) NOT NULL,
    info VARCHAR(255) NOT NUll,
    created_at DATE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO workers (fullname,jobtitle,img,ratenumber,phonenum,info) VALUES
(
'mario saliba','electrician','https://media-exp1.licdn.com/dms/image/C4D03AQHc-4FfvvSAFQ/profile-displayphoto-shrink_800_800/0/1594492798405?e=1634774400&v=beta&t=datBhT_arhrHCuMq_DuPKgck3edmzrmvkIEy1F6NQ0A','2','05050505050','im a smart guy, Mario is a senior fullstack web developer that have alot of experience with frontend & backend development.'
),
(
'mario saliba','plumer','https://media-exp1.licdn.com/dms/image/C4D03AQHc-4FfvvSAFQ/profile-displayphoto-shrink_800_800/0/1594492798405?e=1634774400&v=beta&t=datBhT_arhrHCuMq_DuPKgck3edmzrmvkIEy1F6NQ0A','3','05050505050','im a fool guy, Mario is a senior fullstack web developer that have alot of experience with frontend & backend development.'
),
(
'mario saliba','carpinter','https://media-exp1.licdn.com/dms/image/C4D03AQHc-4FfvvSAFQ/profile-displayphoto-shrink_800_800/0/1594492798405?e=1634774400&v=beta&t=datBhT_arhrHCuMq_DuPKgck3edmzrmvkIEy1F6NQ0A','5','05050505050','im an idiot guy, Mario is a senior fullstack web developer that have alot of experience with frontend & backend development.'
),
(
'mario saliba','mechanical','https://media-exp1.licdn.com/dms/image/C4D03AQHc-4FfvvSAFQ/profile-displayphoto-shrink_800_800/0/1594492798405?e=1634774400&v=beta&t=datBhT_arhrHCuMq_DuPKgck3edmzrmvkIEy1F6NQ0A','4','05050505050','im an idiot guy, Mario is a senior fullstack web developer that have alot of experience with frontend & backend development.'
);


COMMIT;