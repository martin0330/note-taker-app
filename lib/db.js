const fs = require("fs");
const path = require("path");

// function to write to DB
function writeDB(array) {
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(array, null, 2)
    );
}

module.exports = writeDB;