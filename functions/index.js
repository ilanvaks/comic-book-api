import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getAllImages } from "./src/comicImages.js";



const PORT = 3000
const app = express()
app.use(cors())
app.use(express.json())

app.get('/joker', getAllImages)


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`)
})

export const api = functions.https.onRequest(app);
