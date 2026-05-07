const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectToDatabase() {
    await client.connect();

    const db = client.db("giftlink");

    console.log("MongoDB connected");

    return db;
}

module.exports = { connectToDatabase };