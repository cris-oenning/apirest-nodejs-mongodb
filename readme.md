# Study Project for Building a REST API with Node.js and MongoDB

This project consists of a simple study application in JavaScript to create a RESTful API using Node.js and MongoDB, in order to perform CRUD (Create, Read, Update and Delete) operations on a MongoDB database hosted on the MongoDB Atlas service .

The Express framework is used to handle requests and send responses to endpoints, while ODM Mongoose is used to interact with MongoDB. The application is updated in real time during development with the help of the Nodemon package. Operations and tests can be performed using the Postman software, and environment variable management is done through the Dotenv library.

# Technologies Used

- Node.js: JavaScript development platform used to build the server-side application.

- Express: Web framework used to create the REST API and manage routes and HTTP requests.

- MongoDB: NoSQL database used to store application data.

- Mongoose: ODM (Object Data Modeling) used to facilitate interaction with the MongoDB database.

- MongoDB Atlas: MongoDB database hosting and management service in the cloud.

- Nodemon: Tool used to monitor code changes and automatically restart the application in real time during development.

- Postman: Software used to test API requests and verify responses.

- Dotenv: Library used to load environment variables from an .env file.

These technologies were chosen to create a robust, scalable and easy to develop application. Node.js lets you use JavaScript on both the client and the server, while Express provides a fast and flexible framework for building the API. MongoDB is a popular NoSQL database that offers flexibility in handling unstructured or semi-structured data, while Mongoose makes it easy to model and query that data. Hosting the database on MongoDB Atlas allows access to data anywhere, ensuring high availability and scalability.

Using Nodemon speeds up development, as the application is automatically updated whenever there are changes in the code. Postman is an essential tool for testing API requests and verifying that the responses are correct. Finally, the Dotenv library is used to store and load environment variables, such as the MongoDB connection string, which facilitates the management of application settings in different environments.

These technologies combined make it possible to create a complete RESTful API with CRUD operations, providing JSON responses and simple validations to simulate real-world scenarios. With this study project, you can improve your web development skills with Node.js, MongoDB and building RESTful APIs.

# settings

1 - Clone this repository to your local machine

2 - Access the project directory

3 - Install required dependencies via npm package manager by terminal command: "npm install"

4 - Create an .env file in the root of the project to store the necessary environment variables:
DB_USER=yourUsername
DB_PASSWORD=yourPassword

5 - Run the application with the command in the terminal: "npm start"

# Endpoints

The API has the following endpoints that correspond to CRUD operations:

- GET: /person : Returns a list of all registered users

- GET: /person/:id : Returns a single lead based on the given ID.

- POST: /person : Create a new record.

- PUT: /person/:id : Updates an existing master data based on the given ID.

- DELETE: /person/:id : Removes a lead based on the given ID.

API responses are provided in JSON format and also include the correct status indicating whether the operation was successful or if there were any errors.

Some simple validations were applied to the API, simulating 'real world' situations. However, it is important to consider implementing more robust validations for a production environment.

# Contributing

Contributions are welcome! If you want to add features, fix bugs, or improve the documentation, feel free to submit a pull request.
