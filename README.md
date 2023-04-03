**MERN Todo App**

A simple todo app built using the MERN (MongoDB, Express, React, Node.js) stack.

Running Locally

To run the app locally, follow these steps:

Clone the repository to your local machine.  
Navigate to the client directory and run npm install to install the frontend dependencies.  
Navigate to the server directory and run npm install to install the backend dependencies.  
Create a .env file in the server directory and set the DATABASE_URL variable to your MongoDB connection string.

```javascript
DATABASE_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
```

In the client directory, run npm start to start the frontend server.  
In the server directory, run npm start to start the backend server.  
Open your browser and navigate to http://localhost:3000 to view the app.

Features

Add a new todo item  
Mark a todo item as completed  
Delete a todo item
