-- Users table (already provided in your schema)
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE
);

-- AdminActions table (already provided in your schema)
CREATE TABLE AdminActions (
    action_id SERIAL PRIMARY KEY,
    admin_id INT,
    user_id INT,
    action_type VARCHAR(50),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES Users(user_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Puppies table (based on the dogData structure)
CREATE TABLE Puppies (
    puppy_id SERIAL PRIMARY KEY,
    breed VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INT,
    FOREIGN KEY (created_by) REFERENCES Users(user_id)
);

-- Messages table (based on the messagingData structure)
CREATE TABLE Messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES Users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES Users(user_id)
);

-- PuppyListings table (to connect users and puppies)
CREATE TABLE PuppyListings (
    listing_id SERIAL PRIMARY KEY,
    puppy_id INT NOT NULL,
    seller_id INT NOT NULL,
    listing_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'active',
    FOREIGN KEY (puppy_id) REFERENCES Puppies(puppy_id),
    FOREIGN KEY (seller_id) REFERENCES Users(user_id)
);

-- Reviews table (for users to review transactions)
CREATE TABLE Reviews (
    review_id SERIAL PRIMARY KEY,
    reviewer_id INT NOT NULL,
    reviewed_id INT NOT NULL,
    puppy_id INT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (reviewer_id) REFERENCES Users(user_id),
    FOREIGN KEY (reviewed_id) REFERENCES Users(user_id),
    FOREIGN KEY (puppy_id) REFERENCES Puppies(puppy_id)
);