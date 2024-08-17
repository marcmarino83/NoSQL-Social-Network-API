# NoSQL Social Network API

## Description

The NoSQL Social Network API is a backend application that provides the core functionalities needed to run a social networking platform. Built with Express.js, MongoDB, and Mongoose, this API allows users to create accounts, share thoughts, react to friends' thoughts, and manage a friend list. It is designed to handle large amounts of unstructured data efficiently, making it ideal for social networking platforms.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Models](#models)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/NoSQL-Social-Network-API.git
    ```

2. Navigate to the project directory:

    ```bash
    cd NoSQL-Social-Network-API
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Ensure that MongoDB is installed and running on your machine. If you haven't installed MongoDB yet, refer to [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/).

5. Create a `.env` file in the root directory and add the following environment variables:

    ```bash
    MONGODB_URI=mongodb://localhost:27017/socialnetworkDB
    PORT=3001
    ```

6. Start the server:

    ```bash
    npm start
    ```

## Usage

Once the server is running, you can test the API routes using Insomnia, Postman, or any other API client.

### API Routes

- **Users**
  - `GET /api/users` - Retrieve all users
  - `GET /api/users/:userId` - Retrieve a single user by their ID
  - `POST /api/users` - Create a new user
  - `PUT /api/users/:userId` - Update a user by their ID
  - `DELETE /api/users/:userId` - Delete a user by their ID
  - `POST /api/users/:userId/friends/:friendId` - Add a friend to a user's friend list
  - `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list

- **Thoughts**
  - `GET /api/thoughts` - Retrieve all thoughts
  - `GET /api/thoughts/:thoughtId` - Retrieve a single thought by its ID
  - `POST /api/thoughts` - Create a new thought
  - `PUT /api/thoughts/:thoughtId` - Update a thought by its ID
  - `DELETE /api/thoughts/:thoughtId` - Delete a thought by its ID
  - `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
  - `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## Models

- **User**
  - `username`: String, required, unique, trimmed
  - `email`: String, required, unique, must match a valid email address
  - `thoughts`: Array of `_id` values referencing the Thought model
  - `friends`: Array of `_id` values referencing the User model (self-reference)
  - **Virtual**: `friendCount` - Retrieves the length of the user's friends array

- **Thought**
  - `thoughtText`: String, required, must be between 1 and 280 characters
  - `createdAt`: Date, default is the current timestamp, formatted using a getter method
  - `username`: String, required
  - `reactions`: Array of nested documents created with the reactionSchema
  - **Virtual**: `reactionCount` - Retrieves the length of the thought's reactions array

- **Reaction (Schema Only)**
  - `reactionId`: ObjectId, default is a new ObjectId
  - `reactionBody`: String, required, 280 character maximum
  - `username`: String, required
  - `createdAt`: Date, default is the current timestamp, formatted using a getter method

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or enhancements you'd like to see.

## Tests

To test the API, you can use an API client like Insomnia or Postman. There are no automated tests provided for this project.

## Questions

For any questions or issues, please contact me:

- GitHub: [your-username](https://github.com/your-username)
- Email: your-email@example.com

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
