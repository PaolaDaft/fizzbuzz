class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersList = explorers.filter((explorer) => explorer.mission == mission);
        return explorersList

    }
    static getAmountOfExplorersByMission(explorers, mission) {

    }
    static getExplorersUsernamesByMission(explorers, mission) {

    }
}

module.exports = ExplorerService