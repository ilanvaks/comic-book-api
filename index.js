import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const images = [
  "jokerTrying.jpg",
  "JokerStandUP.jpg",
  "emptyAud.jpg",
  "jokerMirror.jpg",
  "jokerCover.jpg",
  "Joker-Charge.jpg",
  "burnDownTown.jpg",
  "BatmanLabWatch.jpg",
  "BatmanLab2.jpg",
  "BatMobile.jpg",
  "batmobile2.jpg",
  "batmanFight.jpg",
  "jokerStreets.jpg",
  "BatmanStandOFF.jpg",
  "JokerStandOFF.jpg"
];

app.get('/api/images', (req, res) => {
  res.json(images);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
