CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    Username VARCHAR(255)  UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE AdminActions (
    action_id SERIAL PRIMARY KEY,
    admin_id INT,
    user_id INT,
    action_type VARCHAR(50),
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES Users(user_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
PuppyMarketPlace
