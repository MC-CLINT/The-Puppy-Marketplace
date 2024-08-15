--breeds table
CREATE TABLE breeds (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT
);

--puppies table
CREATE TABLE puppies (
  id SERIAL PRIMARY KEY,
  breed_id INTEGER NOT NULL REFERENCES breeds(id),
  name VARCHAR(50) NOT NULL,
  age INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(200)
);

--customers table
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20),
  address TEXT
);

--orders table
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES customers(id),
  order_date DATE NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'shipped', 'delivered', 'cancelled'))
);

-- order_items table
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id),
  puppy_id INTEGER NOT NULL REFERENCES puppies(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);