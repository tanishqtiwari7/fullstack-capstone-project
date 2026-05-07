const express = require("express");

const router = express.Router();

const { connectToDatabase } = require("../db");

router.get("/", async (req, res) => {

    const db = await connectToDatabase();

    const { category } = req.query;

    const items = await db.collection("gifts")
        .find({ category })
        .toArray();

    res.json(items);
});

module.exports = router;