class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersList = explorers.filter((explorer) => explorer.mission == mission);
        return explorersList;

    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersList = explorers.filter((explorer) => explorer.mission == mission);
        return explorersList.length;

    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersList = explorers.filter((explorer) => explorer.mission == mission);
        return explorersList.map((explorer) => explorer.githubUsername);

    }
}

module.exports = ExplorerService;