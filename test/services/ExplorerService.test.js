const ExplorerService = require('../../lib/services/ExplorerService')
const Reader = require('../../lib/utils/Reader')

describe('Unit Tests for ExplorerService class', () => {
    test('1) Use the method filterByMission()', () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNodeMission = ExplorerService.filterByMission(explorers, "node");

        explorersInNodeMission.forEach(explorer => {
            expect(explorer.mission).toBe('node')
        })
    });

    test('2) Use the method getAmountOfExplorersByMission()jet', () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNodeMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNodeMission).toEqual(8)
    });

    test('3) Use the method getExplorersUsernamesByMission()', () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNodeMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        expect(explorersInNodeMission).toEqual(['ajolonauta1', 'ajolonauta2', 'ajolonauta3', 'ajolonauta4', 'ajolonauta5',
            'ajolonauta11', 'ajolonauta12', 'ajolonauta13', 'ajolonauta14', 'ajolonauta15'])
    });
})