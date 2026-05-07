const express = require("express");

const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {

    res.json({
        message: "User registered successfully"
    });

});

router.post("/login", async (req, res) => {

    const token = jwt.sign(
        { email: req.body.email },
        "secretkey"
    );

    res.json({ token });

});

router.put("/update", async (req, res) => {

    res.json({
        message: "User updated successfully"
    });

});

module.exports = router;