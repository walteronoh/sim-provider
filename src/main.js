const fs = require("fs");

//Write function to read from folders
const getProviderName = (phonenumber) => {
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
    })
    return provider;
}

//Write function to display country providers
const getCountryProviderData = (country) => {

}

//Validate phone number for a specific country
const validateCountryProvider = (country, phonenumber) => {

}

export { getProviderName };
