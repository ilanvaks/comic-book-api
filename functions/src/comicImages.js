// getImage.js
import { dbConnect } from './dbConnect.js';
import { ObjectId } from 'mongodb';

export async function getAllImages(req, res) {
  const db = await dbConnect();
  const coll = db.collection('images');
  
  const myImages = await coll.find({}).toArray();
  res.status(200).send(myImages);
}
