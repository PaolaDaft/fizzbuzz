const ExplorerController = require("../../lib/controllers/ExplorerController");//Hacer las pruebas para cada metodo, solo tenemos que pasar la mision

describe("Unit Tests for ExplorerService class", () => {
    test("1) Use the method getExplorersByMission()", () => {
        const explorersInNodeMission = ExplorerController.getExplorersByMission("node");

        explorersInNodeMission.forEach(explorer => {
            expect(explorer.mission).toBe("node");
        });
    });

    test("2) Use the method getExplorersUsernamesByMission()jet", () => {
        const explorersInNodeMission = ExplorerController.getExplorersUsernamesByMission("node");

        expect(explorersInNodeMission).toEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5",
            "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });

    test("3) Use the method getExplorersAmonutByMission()", () => {
        const explorersInNodeMission = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersInNodeMission).toEqual(10);
    });

    test("4) Use the method getValidationInNumber()", () => {
        expect(ExplorerController.getValidationInNumber(1)).toEqual(1);
        expect(ExplorerController.getValidationInNumber(3)).toBe("FIZZ");
        expect(ExplorerController.getValidationInNumber(5)).toBe("BUZZ");
        expect(ExplorerController.getValidationInNumber(15)).toBe("FIZZBUZZ");


    });
});