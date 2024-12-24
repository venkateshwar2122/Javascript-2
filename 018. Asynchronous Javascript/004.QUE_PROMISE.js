QUE.1 IS API CALL RETURN PROMISE OBJECT ??

Yes, API calls in JavaScript typically return a Promise object.

Why API Calls Return Promises??
API calls are asynchronous operations, meaning the result is not available immediately. 
Instead of blocking the main thread while waiting for the response, the API call returns a promise that 
represents the eventual completion (or failure) of the operation.

###Example: Using fetch for an API Call
The fetch function is a built-in method in JavaScript for making HTTP requests. It returns a Promise object.
javascript
Copy code
const apiUrl = "https://api.example.com/data";

const apiCall = fetch(apiUrl);

console.log(apiCall);            HERE apicall IS A PROMISE OBJECT
// Output: A Promise object in "pending" state


###### Handling the Promise Returned by API Calls
You can use .then(), .catch(), and .finally() to handle the result of the API call:
javascript
Copy code
fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Also returns a Promise
    })
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    })
    .finally(() => {
        console.log("API call completed.");
    });


#QUE.2   AND WHAT OTHER RETURN PROMISE OBJECT  IN MERN STACK  ?????

in the MERN stack (MongoDB, Express, React, Node.js), many operations return Promise objects to handle
asynchronous tasks. Here’s an overview of common scenarios where you encounter promises in the MERN stack .

1. MongoDB Operations

When using MongoDB, especially with the Mongoose library, most database operations return promises.

Example: Querying a Database
javascript
Copy code
const mongoose = require("mongoose");

const User = mongoose.model("User", new mongoose.Schema({ name: String }));

// Find users
User.find()
    .then((users) => console.log(users))
    .catch((error) => console.error("Error:", error));

// Using async/await
async function fetchUsers() {
    try {
        const users = await User.find();
        console.log(users);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchUsers();
Other MongoDB Methods That Return Promises:
.find(), .findOne(), .save(), .updateOne(), .deleteOne()
Aggregation pipelines with .aggregate()


2. Express.js with Middleware
Express doesn't directly return promises, but when working with async middleware or route handlers, you use promises (often with async/await).

Example: Async Route Handler
javascript
Copy code
const express = require("express");
const app = express();

app.get("/users", async (req, res) => {
    try {
        const users = await User.find(); // Returns a Promise
        res.json(users);
    } catch (error) {
        res.status(500).send("Error fetching users");
    }
});

3. Fetch or Axios (HTTP Requests)
In React (or Node.js), you often make HTTP requests to APIs. Both fetch and libraries like axios return promises.

Fetch Example:
javascript
Copy code
fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
Axios Example:
javascript
Copy code
const axios = require("axios");

axios.get("https://api.example.com/data")
    .then((response) => console.log(response.data))
    .catch((error) => console.error("Error:", error));

// Using async/await
async function fetchData() {
    try {
        const response = await axios.get("https://api.example.com/data");
        console.log(response.data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();


4. React State Management (useEffect and fetch)
React hooks like useEffect often rely on promises to handle side effects, such as API calls.

Example:
javascript
Copy code
import React, { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.example.com/data");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}

export default App;



ETC.............







