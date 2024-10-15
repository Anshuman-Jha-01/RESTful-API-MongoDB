// Require the necessary files and dependencies
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js"); //Provides the code for the model used in this program
const methodOverride = require("method-override");

// Set the port
const port = 3000;

// Set the necessary paths
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
app.set("public", path.join(__dirname, "/public"));

// Use the express middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// Initialize the server
app.listen(port, (req, res) => {
    console.log(`Server initialized for port ${port}`);
});

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

// Create the Index route to view all the chats
app.get("/chats", (req, res) => {
    Chat.find()
        .then((result) => {
            res.render("index.ejs",{result});
        })
        .catch((err) => {
            console.log(err);
        })
})

// View chat details
app.get("/chats/:id", (req, res) => {
    let id = req.params.id;
    Chat.findById(id)
        .then((result) => {
            res.render("details.ejs", {result});
        })
        .catch((err) => {
            console.log(err);
        });
});

// Create new chats
// Get the creation form
app.get("/new", (req, res) => {
    res.render("new.ejs");
});
// Insert into Database
app.post("/chats", (req, res) => {
    let from = req.body.from;
    let to = req.body.to;
    let message = req.body.message;
    let created_at = new Date();
    let newChat = new Chat({from: from, to: to, message: message, created_at: created_at});
    newChat.save()
        .then((result) => {
            res.redirect("/chats");
        })
        .catch((err) => {
            console.log(err);
        });
});

// Edit chats
// Get the edit form
app.get("/chats/:id/edit",(req, res) => {
    let id = req.params.id;
    Chat.findById(id)
        .then((result) => {
            res.render("edit.ejs", {result});
        })
        .catch((err) => {
            console.log(err);
        });
})
// Update the database
app.patch("/chats/:id", (req, res) => {
    let id = req.params.id;
    let message = req.body.message;
    Chat.findByIdAndUpdate(id, {message: message}, {runValidators: true})
        .then((result) => {
            res.redirect("/chats");
        })
        .catch((err) => {
            console.log(err);
        });
});

// Delete Chats
app.delete("/chats/:id", (req, res) => {
    let id = req.params.id;
    Chat.findByIdAndDelete(id)
        .then((result) => {
            res.redirect("/chats");
        })
        .catch((err) => {
            console.log(err);
        });
});