// Require the necessary and dependency
const mongoose = require("mongoose");

// Define the collection schema
const chatSchema = new mongoose.Schema({
    from: {
        type: String, 
        required: true
    },
    to: {
        type: String, 
        required: true
    },
    message: {
        type: String, 
        maxLength: 100
    },
    created_at: {
        type: Date, 
        required: true}
});

// Create the model
const Chat = mongoose.model("Chat", chatSchema);

// Export the model
module.exports = Chat;