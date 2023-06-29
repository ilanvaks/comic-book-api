// dbConnect.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI;
const client = new MongoClient(mongoURI);

let db;

const dbConnect = async () => {
  if (db) return db;
  
  await client.connect();
  console.log('Connected to the MongoDB database!');
  
  db = client.db('comic-images');
  return db;
};

export { dbConnect };
