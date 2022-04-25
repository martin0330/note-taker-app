const router = require("express").Router();

// import database
const data = require("../../db/db.json");

// import write function
const writeDB = require('../../lib/db')

// get notes
router.get("/notes", (req, res) => {
    res.json(data);
});

// add new note
router.post("/notes", (req, res) => {
    if (data.length === 0) {
        req.body.id = '0';
    }
    else {
        req.body.id = (parseInt(data[data.length - 1].id) + 1).toString();
    }
    data.push(req.body);
    res.json(data)
    writeDB(data)
});

// delete note function
router.delete("/notes/:id", (req, res) => {

    const index = data.map(function (item) {
        return item.id
    }).indexOf(req.params.id);
    data.splice(index, 1)
    writeDB(data)
    res.json(data)
})

module.exports = router;