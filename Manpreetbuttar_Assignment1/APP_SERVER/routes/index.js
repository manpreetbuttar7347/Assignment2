var express = require('express');
var router = express.Router();
const ctrlMain = require("../controller/about");
const ctrlMusic = require("../controller/music");

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/list', ctrlMusic.musiclist);
router.get('/display', ctrlMusic.display);
router.get('/about', ctrlMusic.about);



module.exports = router;
