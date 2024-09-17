import { addSong, listSong, removeSong } from "../controllers/songController.js";
import express from 'express';
import upload from "../middleware/multer.js";

const songRounter = express.Router();

songRounter.post('/add', upload.fields([{name:'image', maxCount:1}, {name:'audio', maxCount:1}]), addSong);
songRounter.get('/list', listSong);
songRounter.post('/remove', removeSong);

export default songRounter;