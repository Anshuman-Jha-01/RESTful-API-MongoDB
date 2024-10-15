
# Chat Management Application

This project is a **Chat Management Application** built using **Node.js**, **Express.js**, **MongoDB**, and **EJS** templating. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on chat records stored in a MongoDB database.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Project Overview

This application mimics basic chat management functionality. It connects to a MongoDB database to store chat details such as sender, recipient, message, and timestamp. It allows users to:
- View all chat records
- View details of individual chats
- Create new chat records
- Edit existing chat messages
- Delete chat records

## Features

- **CRUD Operations:** Provides full support for creating, reading, updating, and deleting chat records.
- **MongoDB Integration:** Uses MongoDB for storing and managing chat data.
- **Templating Engine:** Utilizes EJS for rendering server-side HTML templates.
- **Routing and Middleware:** Express.js is used for handling HTTP requests and routing.

## Technologies Used

- **Node.js**: JavaScript runtime for the server
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing chat data
- **EJS**: Templating engine for rendering HTML
- **Method-Override**: Middleware to support HTTP verbs like PUT and DELETE
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anshuman-Jha-01/RESTful-API-MongoDB.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd RESTful-API-MongoDB
   ```

3. **Install dependencies:**
   Ensure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your system. Then run:
   ```bash
   npm install 
   ```

4. **Run MongoDB:**
    Start MongoDB on your local machine or provide a remote MongoDB connection string.

5. **Run the application:**
   Start the Node.js server:
   ```bash
   node index.js
   ```

7. **Insert initial data:**
   Run the init.js file to populate the database with mock chat data:
   ```bash
   node init.js
   ```

8. **Access the application:**
   Open your browser and go to:
   ```
   http://localhost:3000/chats
   ```

## Usage

- The `/chats` route displays all the chat records.
- Use `/chats/new` to create a new chat.
- View individual chats by navigating to `/chats/:id`.
- Edit chat messages via `/chats/:id/edit`.
- Delete chat records through `/chats/:id`. 
   - You will be asked to confirm your choice before proceeding.

### Routes

- **GET** `/chats`: View all chats
- **POST** `/chats`: Create a new chat
- **GET** `/chats/:id`: View a specific chat
- **PATCH** `/chats/:id`: Edit a chat
- **DELETE** `/chats/:id`: Delete a chat

## Project Structure

```
/views         # EJS templates for rendering UI
/public        # Static files (CSS, JS, images)
index.js       # Main server file
init.js        # Script to populate database with mock chat data
package.json   # Project metadata and dependencies
```

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).











