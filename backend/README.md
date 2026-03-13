# Backend Documentation

## Overview
This document provides an overview of the backend architecture and API endpoints of the Cargo Tracking App.

## Technologies Used
- **Node.js**: The server-side JavaScript runtime used for building the application.
- **Express**: A web application framework for Node.js, enabling easy route handling.
- **MongoDB**: NoSQL database used for data storage.

## API Endpoints

### Authentication
- **POST /api/auth/login**: Authenticate users and return a token.
- **POST /api/auth/register**: Register new users.

### User Management
- **GET /api/users**: Get a list of all users.
- **GET /api/users/:id**: Get user details by ID.
- **PUT /api/users/:id**: Update user details by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

### Cargo Management
- **POST /api/cargo**: Create new cargo entry.
- **GET /api/cargo**: Retrieve all cargo entries.
- **GET /api/cargo/:id**: Retrieve cargo details by ID.
- **PUT /api/cargo/:id**: Update cargo details by ID.
- **DELETE /api/cargo/:id**: Delete cargo entry by ID.

## Running the App

1. Clone the repository.
2. Navigate to the backend directory.
3. Run `npm install` to install dependencies.
4. Use `npm start` to run the server.

## Testing
Tests can be run using Jest. Use the command `npm test` to execute the tests.

## Conclusion
This documentation provides a basic overview of the backend structure and functionality of the Cargo Tracking App. Please refer to the individual API documentation for more detailed information on specific endpoints.