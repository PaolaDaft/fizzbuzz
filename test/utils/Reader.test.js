const fs = require("fs");
const Reader = require("../../lib/utils/Reader");

describe("Unit Tests for Reader class", () => {
    test("1) Part 1 Read json file", () => {
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        const rawdata = fs.readFileSync("explorers.json");
    
        expect(explorers).toEqual(JSON.parse(rawdata));
    });
});