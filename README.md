# Streamers API

This repository contains the code for a RESTful API that manages information about streamers. It allows users to perform CRUD operations on streamers, as well as upvote and downvote them.

## Features

- **Get all streamers**: Retrieve a list of all streamers.
- **Get streamer by ID**: Retrieve information about a specific streamer by their ID.
- **Add a new streamer**: Add a new streamer to the database.
- **Update streamer**: Upvote or downvote a streamer.
- **Error handling**: Properly handles errors and provides meaningful responses.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- dotenv
- cors
- morgan

## Installation

1. Clone the repository and navigate to the project directory.
2. Install dependencies with `npm install`.
3. Create a `.env` file with your MongoDB URI (URIDB=<your-mongodb-uri>).
4. Start the server with `npm start`.

## API Endpoints

- **GET /streamers**: Retrieve all streamers.
- **GET /streamers/:id**: Retrieve a streamer by ID.
- **POST /streamers**: Add a new streamer.
  Request body should include:
  name: Name of the streamer (required).
  avatar: URL of the streamer's avatar image (required).
  platform: Streaming platform (required).
  description: Description of the streamer (required).
- **PATCH /streamers/:id/upvote**: Upvote a streamer.
  Request body should include:
  userId: ID of the user performing the upvote (required).
- **PATCH /streamers/:id/downvote**: Downvote a streamer.
  Request body should include:
  userId: ID of the user performing the downvote (required).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
