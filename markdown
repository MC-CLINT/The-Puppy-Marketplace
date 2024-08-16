# Puppy Marketplace Database Documentation
This documentation provides a comprehensive overview of your Puppy Marketplace database structure, 
including table schemas, relationships, and important considerations for maintenance and security. 
It's designed to be a reference for database administrators and developers working on this project.
## Database Overview

Name: PuppyMarketPlace
Type: PostgreSQL
Port: 5000
Host: localhost

## Table Schemas

### Users
Stores information about registered users, including administrators.

| Column    | Type         | Constraints                |
|-----------|--------------|----------------------------|
| user_id   | SERIAL       | PRIMARY KEY                |
| Username  | VARCHAR(255) | UNIQUE, NOT NULL           |
| email     | VARCHAR(255) | UNIQUE, NOT NULL           |
| password  | VARCHAR(255) | NOT NULL                   |
| is_admin  | BOOLEAN      | DEFAULT FALSE              |

### AdminActions
Logs actions performed by administrators.

| Column      | Type         | Constraints                |
|-------------|--------------|----------------------------|
| action_id   | SERIAL       | PRIMARY KEY                |
| admin_id    | INT          | FOREIGN KEY (Users.user_id)|
| user_id     | INT          | FOREIGN KEY (Users.user_id)|
| action_type | VARCHAR(50)  |                            |
| timestamp   | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP  |

### Puppies
Stores information about individual puppies.

| Column     | Type         | Constraints                |
|------------|--------------|----------------------------|
| puppy_id   | SERIAL       | PRIMARY KEY                |
| breed      | VARCHAR(255) | NOT NULL                   |
| price      | DECIMAL(10,2)| NOT NULL                   |
| image_url  | VARCHAR(255) |                            |
| created_at | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP  |
| updated_at | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP  |
| created_by | INT          | FOREIGN KEY (Users.user_id)|

### PuppyListings
Connects puppies to sellers and manages listing status.

| Column      | Type         | Constraints                |
|-------------|--------------|----------------------------|
| listing_id  | SERIAL       | PRIMARY KEY                |
| puppy_id    | INT          | FOREIGN KEY (Puppies.puppy_id)|
| seller_id   | INT          | FOREIGN KEY (Users.user_id)|
| listing_date| TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP  |
| status      | VARCHAR(50)  | DEFAULT 'active'           |

### Messages
Stores messages between users.

| Column      | Type         | Constraints                |
|-------------|--------------|----------------------------|
| message_id  | SERIAL       | PRIMARY KEY                |
| sender_id   | INT          | FOREIGN KEY (Users.user_id)|
| receiver_id | INT          | FOREIGN KEY (Users.user_id)|
| content     | TEXT         | NOT NULL                   |
| timestamp   | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP  |

### Reviews
Allows users to review transactions and rate other users.

| Column      | Type         | Constraints                |
|-------------|--------------|----------------------------|
| review_id   | SERIAL       | PRIMARY KEY                |
| reviewer_id | INT          | FOREIGN KEY (Users.user_id)|
| reviewed_id | INT          | FOREIGN KEY (Users.user_id)|
| puppy_id    | INT          | FOREIGN KEY (Puppies.puppy_id)|
| rating      | INT          | CHECK (rating >= 1 AND rating <= 5)|
| comment     | TEXT         |                            |
| review_date | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP  |

## 3. Indexes

- Users: user_id (primary key), email (unique)
- AdminActions: action_id (primary key), admin_id, user_id
- Puppies: puppy_id (primary key), created_by
- PuppyListings: listing_id (primary key), puppy_id, seller_id
- Messages: message_id (primary key), sender_id, receiver_id
- Reviews: review_id (primary key), reviewer_id, reviewed_id, puppy_id

## 4. Relationships

- AdminActions.admin_id -> Users.user_id
- AdminActions.user_id -> Users.user_id
- Puppies.created_by -> Users.user_id
- PuppyListings.puppy_id -> Puppies.puppy_id
- PuppyListings.seller_id -> Users.user_id
- Messages.sender_id -> Users.user_id
- Messages.receiver_id -> Users.user_id
- Reviews.reviewer_id -> Users.user_id
- Reviews.reviewed_id -> Users.user_id
- Reviews.puppy_id -> Puppies.puppy_id

## 5. Connection Information

```javascript
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    password: "@chim0t@",
    database: "PuppyMarketPlace",
    port: 5000,
});



psql -U 
