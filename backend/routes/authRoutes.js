const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const { connectToDatabase } = require("../db");


// Register User
router.post("/register", async (req, res) => {

    res.json({
        message: "User registered successfully"
    });

});


// Login User
router.post("/login", async (req, res) => {

    const db = await connectToDatabase();

    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({
        email: req.body.email
    });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const token = jwt.sign(
        { email: user.email },
        "secretkey"
    );

    res.json({ token });

});


// Update User
router.put("/update", async (req, res) => {

    const db = await connectToDatabase();

    const usersCollection = db.collection("users");

    const currentUser = await usersCollection.findOne({
        email: req.body.email
    });

    res.json({
        message: "User updated successfully",
        user: currentUser
    });

});

module.exports = router;