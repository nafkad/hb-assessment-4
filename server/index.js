const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);

app.listen(4000, () => console.log("Server running on 4000"));

// Feature 1: Fortunes
// Create a new route called /api/fortune in server/index.js that runs your getFortune function.
app.get("/api/fortune", controller.getFortune);

// Feature 2-4: Additional Features 
    // Add 3 additional features to the website, just like the previous one. 
    // 1. A button or element on the site to be clicked/submitted 
    // 2. A request sent via axios 
    // 3. A route on your server that sends a response

app.get("/api/number", controller.getNumber);
app.get("/api/name", controller.getName);
app.get("/api/instructor", controller.getInstructor);
