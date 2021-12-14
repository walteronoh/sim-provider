import * as fs from "fs";

export interface ProviderOutput {
    name: string;
    regex: string;
}

const getProviderName = (phonenumber: string): ProviderOutput => {
    const countries = fs.readdirSync("countries/");
    let provider;
    countries.forEach((country) => {
        const file = fs.readdirSync(`countries/${country}/`);
        if (file.length > 0) {
            const content = fs.readFileSync(`countries/${country}/${file}`, "utf8");
            try {
                const obj = JSON.parse(content);
                obj.simProviders
                    .filter((provider) => new RegExp(provider.regex).test(phonenumber))
                    .map((value) => provider = value);
            } catch (error) {
                throw error;
            }
        }
    });
    return provider;
};

// const getCountryProviderData = (country: string) => {

// };


// const validateCountryProvider = (country: string, phonenumber: string) => {

// };

export { getProviderName };