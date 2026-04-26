import { MongoClient, ServerApiVersion } from "mongodb";

const URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectToDatabase() {
  if (db) return db;

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    db = client.db("employees");
    console.log("Connected to MongoDB");
    return db;
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    throw err;
  }
}

export default connectToDatabase;
