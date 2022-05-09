const fs = require("fs");

class Reader {
    static readJsonFile(path) {
        // Part 1 Read json file ===========================
        const rawdata = fs.readFileSync(path);
        const explorers = JSON.parse(rawdata); //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
        return explorers;
    }
}

module.exports = Reader;