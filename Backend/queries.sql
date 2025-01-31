
-- PuppyMarketPlace

CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    contact_info VARCHAR(255),
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Admins (
    admin_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE,  -- Each admin corresponds to a unique user
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT,  -- User who sends the message
    receiver_id INT,  -- User who receives the message
    message_content TEXT NOT NULL,  -- The content of the message
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- When the message was sent
    is_read BOOLEAN DEFAULT FALSE,  -- Whether the message has been read
    FOREIGN KEY (sender_id) REFERENCES Users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES Users(user_id),
    FOREIGN KEY (message_id) REFERENCES PuppyListings(listing_id)  -- If you want to associate messages with specific listings
);

CREATE TABLE PuppyListings (
    listing_id SERIAL PRIMARY KEY,
    seller_id INT,
    puppy_name VARCHAR(255) NOT NULL,
    breed VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),  -- URL or path to the image file
    description TEXT,
    is_sold BOOLEAN DEFAULT FALSE,
    date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (seller_id) REFERENCES Sellers(seller_id)
);


CREATE TABLE Sellers (
    seller_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE,  -- Each seller corresponds to a unique user
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);


Dogs
1) Breed :corgi puppy,
   Puppy_name:puk,
   image_url:https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg,
   Price:$15.00,
   description:Adorable Corgi puppy with a charming personality and distinctive short legs.
    At just 12 weeks old, this pup is playful, friendly, and loves to be around people. Known for its intelligence and easygoing nature, it’s great with kids and other pets. With a sturdy build and a fluffy coat, this Corgi is both cute and clever,
     making it a perfect addition to any family.