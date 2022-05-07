const fs = require("fs");

class Reader {
    static readJsonFile() {
        // Part 1 Read json file ===========================
        const rawdata = fs.readFileSync("explorers.json");
        const explorers = JSON.parse(rawdata); //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
        return explorers
    }
}

module.exports = Reader