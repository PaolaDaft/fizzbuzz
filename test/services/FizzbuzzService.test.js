const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Unit Tests for FizzbuzzService", () => {
    test("Case 1", () => {
        const explorer1 = { name: "Explorer1", score: 1 };
        FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorer1.trick).toBe(1);
    });

    test("Case 2", () => {
        const explorer3 = { name: "Explorer3", score: 3 };
        FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer3.trick).toBe("FIZZ");
    });

    test("Case 3", () => {
        const explorer5 = { name: "Explorer5", score: 5 };
        FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorer5.trick).toBe("BUZZ");
    });

    test("Case 4", () => {
        const explorer15 = { name: "Explorer15", score: 15 };
        FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorer15.trick).toBe("FIZZBUZZ");
    });
    test("New requirement | applyValidationInNumber method", () => {
        expect(FizzbuzzService.applyValidationInNumber(1)).toBe(1);
        expect(FizzbuzzService.applyValidationInNumber(3)).toBe("FIZZ");
        expect(FizzbuzzService.applyValidationInNumber(5)).toBe("BUZZ");
        expect(FizzbuzzService.applyValidationInNumber(15)).toBe("FIZZBUZZ");
    });
});