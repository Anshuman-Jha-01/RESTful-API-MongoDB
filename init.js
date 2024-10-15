// Require the necessary files and dependencies
const mongoose = require("mongoose");
const Chat = require("./models/chat.js"); //Provides the model used in this program

// Establish the connection with MongoDB
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
    .then((res) => {
        console.log("Connection established");
    })
    .catch((err) => {
        console.log(err);
    });

// Insert an array of documents in the Database
Chat.insertMany([{from: "Adam", to: "Eve", message: "Good morning Eve!", created_at: new Date()},{from: "Andrew", to: "Logan", message: "What is the stock analysis today?", created_at: new Date()}, {from: "Roda", to: "Eva", message: "Did you go to the concert last night?", created_at: new Date()}, {from: "Ram", to: "Hari", message: "It's raining quite heavily", created_at: new Date()}, {from: "Aron", to: "Rena", message: "I have received your message", created_at: new Date()}]);
