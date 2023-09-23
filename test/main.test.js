const countries = require("../dist/countries.bundle.json");
const { validateRegExp } = require("../src/util/validator");

describe("Testing countries bundled JSON file (countries.bundle.json)", () => {
    it("Should be an array", () => {
        expect(Array.isArray(countries)).toBe(true);
    });

    it("Should not be empty", () => {
        expect(countries).not.toHaveLength(0);
    });

    it("Should have the correct structure {country: '', simRegex: '', simProviders: [{name: '', regex: ''}]}", () => {
        const structure = {
            country: expect.any(String),
            simRegex: expect.any(String),
            simProviders: expect.arrayContaining([expect.objectContaining({ name: expect.any(String), regex: expect.any(String) })])
        };
        countries.forEach((value) => {
            expect(value).toEqual(structure);
        });
    });

    it("Should have the correct country sim RegEx", () => {
        countries.forEach((value) => {
            expect(validateRegExp(value.simRegex)).toBe(true);
        });
    });

    it("Should have the correct sim provider RegEx", () => {
        countries.forEach((value) => {
            value.simProviders.forEach((v) => {
                expect(validateRegExp(v.regex)).toBe(true);
            });
        });
    });
});