//fs is used to read / write files.
const fs = require("fs");
const router = require("express").Router();

//Setup /words route
router.get("/words", (req, res) => {
    const words = JSON.parse(fs.readFileSync("./words/words.json"));
    res.send(words);
});

module.exports = router;