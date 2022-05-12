const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");
const Reader = require("../../lib/utils/Reader");

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

    static getValidationInNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);

    }
}
module.exports = ExplorerController;