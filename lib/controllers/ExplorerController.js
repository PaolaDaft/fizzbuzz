const ExplorerService = require("../../services/ExplorerService");
//const FizzbuzzService = require("../../services/FizzbuzzService");
const Reader = require("../../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorersList = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorersList, mission);
    
    }

    static getExplorersUsernamesByMission(mission) {
        const explorersList = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorersList, mission);

    }

    static getExplorersAmonutByMission(mission){
        const explorersList = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorersList, mission);

    }
}
module.exports = ExplorerController;