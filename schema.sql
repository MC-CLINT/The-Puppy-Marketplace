-- schema.sql
CREATE TABLE breeds (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE puppies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  breed_id INTEGER NOT NULL REFERENCES breeds(id),
  age INTEGER,
  price DECIMAL(10, 2),
  CONSTRAINT fk_breed FOREIGN KEY (breed_id) REFERENCES breeds(id)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);